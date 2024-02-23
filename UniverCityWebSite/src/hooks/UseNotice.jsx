import React from 'react';
import { useQuery } from "@tanstack/react-query";

const UseNotice = () => {
    const { data: noticeData = [], refetch } = useQuery({ queryKey: ["notices"], queryFn: async () => {
        const res = await fetch("https://book-your-college-server-copy.vercel.app/notice");
        return res.json();
      }});
  return { noticeData, refetch };
};

export default UseNotice;