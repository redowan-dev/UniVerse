import { useRef, useState } from "react";
import line from "../../assets/Img/line.png";
import * as XLSX from "xlsx";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import Swal from "sweetalert2";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import {
  FaCalculator,
  FaMinusCircle,
  FaPlusCircle,
  FaPrint,
} from "react-icons/fa";


function CGPACalculator() {





  const [overallYearCGPA, setOverallYearCGPA] = useState(null);

  const [yearData, setYearData] = useState([
    { pointCreditPairs: [{ name: "", point: "", credit: "" }], calculatedCGPA: null },
  ]);
console.log(yearData);
  const addInputField = (yearIndex) => {
    const newYearData = [...yearData];
    newYearData[yearIndex].pointCreditPairs.push({ point: "", credit: "" });
    setYearData(newYearData);
  };

  const removeInputField = (yearIndex) => {
    const newYearData = [...yearData];
    if (newYearData[yearIndex].pointCreditPairs.length > 1) {
      newYearData[yearIndex].pointCreditPairs.pop(); // Remove the last pair
      setYearData(newYearData);
    }
  };

  const handleInputChange = (yearIndex, pairIndex, key, value) => {
    const newYearData = [...yearData];
    newYearData[yearIndex].pointCreditPairs[pairIndex][key] = value;

    if (key === "point" && parseFloat(value) > 4.0 ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Point can't be more than 4.00",
      });
      newYearData[yearIndex].pointCreditPairs[pairIndex][key] = "";
    } else if (key === "point" && parseFloat(value) < 0) {
      newYearData[yearIndex].pointCreditPairs[pairIndex][key] = "0.00";
    }

    setYearData(newYearData);
  };

  const calculateCGPA = (yearIndex) => {
    const totalPoints = yearData[yearIndex].pointCreditPairs.reduce(
      (acc, pair) => acc + parseFloat(pair.point) * parseFloat(pair.credit),
      0
    );
    const totalCredits = yearData[yearIndex].pointCreditPairs.reduce(
      (acc, pair) => acc + parseFloat(pair.credit),
      0
    );

    if (isNaN(totalPoints) || isNaN(totalCredits) || totalCredits === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter valid numbers for both point and credit, and ensure credit is not zero.",
        footer: '<p>Check All input</p>'
      });
      return;
    }

    const calculatedCGPA = totalPoints / totalCredits;
    Swal.fire({
      title: "Congrats!",
      html: `<div style="color: black; font-weight: bold; font-size: 2em;">You achieved <span style="color: red;">${calculatedCGPA.toFixed(
        2
      )} </span> CGPA!</div>`,
      icon: "success",
    });

    const newYearData = [...yearData];
    newYearData[yearIndex].calculatedCGPA = calculatedCGPA;
    setYearData(newYearData);
  };

  const addYear = () => {
    setYearData([
      ...yearData,
      { pointCreditPairs: [{ point: "", credit: "" }], calculatedCGPA: null },
    ]);
  };

  const removeYear = () => {
    if (yearData.length > 1) {
      const newYearData = [...yearData];
      newYearData.pop();
      setYearData(newYearData);
    }
  };

  const calculateOverallCGPA = () => {
    const totalAllYearPoints = yearData.reduce((acc, year) => {
      return (
        acc +
        year.calculatedCGPA *
          year.pointCreditPairs.reduce(
            (acc, pair) => acc + parseFloat(pair.credit),
            0
          )
      );
    }, 0);

    const totalAllYearCredits = yearData.reduce((acc, year) => {
      return (
        acc +
        year.pointCreditPairs.reduce(
          (acc, pair) => acc + parseFloat(pair.credit),
          0
        )
      );
    }, 0);

    if (
      isNaN(totalAllYearPoints) ||
      isNaN(totalAllYearCredits) ||
      totalAllYearCredits === 0
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter valid numbers for both point and credit, and ensure credit is not zero.",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
      
      return;
    }

    const overallCGPA = totalAllYearPoints / totalAllYearCredits;
    Swal.fire({
      title: "Overall CGPA",
      html: `<div style="color: black; font-weight: bold; font-size: 2em;">Your Overall CGPA is <span style="color: red;">${overallCGPA.toFixed(
        2
      )} </span></div>`,
      icon: "success",
    });
    setOverallYearCGPA(overallCGPA);
  };

  const exportToPdf = () => {
    const doc = new jsPDF();

    // Define columns for the table
    const columns = ["Semester", "Subject", "Point", "Credit", "CGPA"];
    

    // Define rows for the table
    const rows = [];

    yearData.forEach((year, yearIndex) => {
        rows.push([{ content: `Semester ${yearIndex + 1}`, colSpan: 5, styles: { fontStyle: 'bold' } }]);
        year.pointCreditPairs.forEach(pair => {
            rows.push(["", pair.name, pair.point, pair.credit,  ""]);
        });
        const YearCgpa = year.calculatedCGPA;
        rows.push(["", "", "", "", YearCgpa ? ` CGPA: ${YearCgpa.toFixed(2)}` : ""]);
    });

    rows.push(["", "",  overallYearCGPA ? `Overall CGPA: ${overallYearCGPA.toFixed(2)}` : ""]);
    // Add the table to the PDF document
    doc.autoTable({
        head: [columns],
        body: rows,
        startY: 10,
    });

    // Save the PDF file
    doc.save('cgpa_data.pdf');
};




 

 

  
  
  
  return (
    <div >
     
      <div >
        <div className="text-center mb-12 mt-4">
          <p className="text-[48px] font-alice  dark:text-white">
            Calculate CGPA{" "}
          </p>
          <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
        </div>

<div className="bg-gray-300 rounded-xl ">
{yearData.map((year, yearIndex) => (
          <div key={yearIndex} className="mt-8">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="m-2 bg-blue-500 text-xl text-white text-center">{`Semester ${
                yearIndex + 1
              }`}</div>
              <div>
                {year.pointCreditPairs.map((pair, pairIndex) => (
                  <div
                    key={pairIndex}
                    className="flex flex-col md:flex-row justify-center items-center"
                  >
                    <input
                      type="text"
                      placeholder={`Enter Sub Name`}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg input-info  block  p-2.5 w-full max-w-xs m-4"
                      value={pair.name}
                      onChange={(e) =>
                        handleInputChange(
                          yearIndex,
                          pairIndex,
                          "name",
                          e.target.value
                        )
                      }
                    />
                    {/* <input
                      type="number"
                      placeholder={`Enter Point ${pairIndex + 1}`}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg input-info  block  p-2.5 w-full max-w-xs m-4"
                      value={pair.point}
                      onChange={(e) =>
                        handleInputChange(
                          yearIndex,
                          pairIndex,
                          "point",
                          e.target.value
                        )
                      }
                    /> */}
            <select type="number" required
                         placeholder={`Enter Point ${pairIndex + 1}`}
                      className="select select-info w-full max-w-xs bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg input-info  block  p-2.5  m-4"
                      value={pair.point}
                      onChange={(e) =>
                        handleInputChange(
                          yearIndex,
                          pairIndex,
                          "point",
                          e.target.value
                        )
                      } >
  <option  disabled value="">Select Grade</option>
  <option value={4.00}>A+</option>
  <option value={3.75}>A-</option>
  <option value={3.50}>A</option>
  <option value={3.25}>B+</option>
  <option value={3.00}>B</option>
  <option value={2.75}>B-</option>
  <option value={2.50}>C+</option>
  <option value={2.25}>C</option>
  <option value={2.00}>D</option>
  <option value={0.00}>F</option>
</select>

                    <input  
                      type="number"
                      placeholder={`Enter Credit `}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg input-info  block  p-2.5 w-full max-w-xs m-4"
                      value={pair.credit}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        if (newValue !== "0" ) { 
                         
                            handleInputChange(
                                yearIndex,
                                pairIndex,
                                "credit",
                                newValue
                            );
                        }
                    }}
                      
                    />
        
                  </div>
                ))}
              </div>
              <div className="flex justify-between">
                <button
                  className="text-[20px] font-bold w-[40%] ms-1 md:mx-2  lg:rounded-full rounded-xl text-white bg-green-600 flex justify-center items-center m-4"
                  onClick={() => addInputField(yearIndex)}
                >
                  <AiOutlinePlusCircle className="mx-2" />
                  Add
                </button>
                <button
                  className="text-[20px] font-bold w-[40%] mx-2  lg:rounded-full rounded-xl  bg-red-500 text-white    flex justify-center items-center m-4"
                  onClick={() => removeInputField(yearIndex)}
                >
                  <AiOutlineMinusCircle className="mx-2" />
                  Remove
                </button>
                <button
                  className="text-[20px] font-bold w-[40%] mx-2lg:rounded-full rounded-xl  text-white bg-blue-700  flex justify-center items-center me-1 md: m-4"
                  onClick={() => calculateCGPA(yearIndex)}
                >
                  Calculate CGPA
                </button>
              </div>
              <hr className="h-px my-8 bg-white border-3 dark:bg-gray-700" />
            </form>

            {year.calculatedCGPA !== null && (
              <div className=" ">
                <p className=" font-mono text-3xl  w-[40%] mx-auto  lg:rounded-full rounded-xl  text-black py-[13px]  items-start mt-4 ">
                  Your {`Semester ${
                yearIndex + 1
              }`} CGPA is:  &nbsp; <span className="font-bold" > {year.calculatedCGPA.toFixed(2)}</span> 
                </p>
              </div>
            )}
          </div>
        ))}

        <div>
          {yearData.length > 1 && overallYearCGPA !== null && (
            <div className="py-4">
              <p className="text-[20px] font-bold w-[40%] mx-auto bg-blue-500 lg:rounded-full rounded-xl text-white py-[13px] flex justify-center items-start mt-4">
                Overall CGPA is: {overallYearCGPA.toFixed(2)}
              </p>
            </div>
          )}
        </div>
        
   
</div>


      </div>

      <div className="flex flex-col bg-gray-300 rounded lg:flex-row justify-between m-4">
        <>
          <button className="btn text-white m-2" onClick={addYear}>
            <FaPlusCircle />
            Add Semester
          </button>
          <button
            className="btn text-white m-2"
            onClick={calculateOverallCGPA}
          >
            <FaCalculator />
            Calculate Overall CGPA
          </button>
        </>

        <>
          <button className="btn text-white m-2" onClick={removeYear}>
            <FaMinusCircle />
            remove Semester
          </button>
          <button className="btn bg-red-700 m-2" onClick={exportToPdf}>
            <FaPrint className="text-white" />
          </button>
        </>
      </div>
    
    </div>
  );
}

export default CGPACalculator;
