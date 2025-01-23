import React from 'react';
import { useState, useEffect } from "react"

const TextChange = () => {

    const texts=["Hi, I'm Afia", "Hi, I'm Web Developer", "Hi, I love Coding"];
    const [currentText, setCurrentText] = useState("");
    const [endValue, setEndValue] = useState(1);
    const [isForward, setIsForward] = useState(true);
    const [index, setIndex] = useState(0);

    // useEffect(() => {
    //   const intervalId = setInterval(() => {
    //     setCurrentText(texts[index].substring(0,endValue));
    //     if(isForward){
    //         setendValue((prev) => prev + 1);
    //     } else{
    //         setendValue((prev) => prev - 1);
    //     }
    //     if(endValue > texts[index].length+10){
    //         setIsForward(false)
    //     }
    //     if(endValue < 2.1){
    //         setIsForward(true)
    //         setIndex((prev) => (prev + 1) % texts.length);
    //     }
    //   },50);

    useEffect(() => {
        const intervalId = setInterval(() => {
          const currentTextLength = texts[index].length;
    
          // Update the displayed text character by character
          setCurrentText(texts[index].substring(0, endValue));
    
          // Handle forward typing logic
          if (isForward) {
            setEndValue((prev) => prev + 1);
          }
    
          // If finished typing, reverse typing (but stop at "Hi")
          if (endValue === currentTextLength && isForward) {
            setIsForward(false);
          }
    
          // Reversing until "Hi" is left
          if (!isForward && endValue > 3) {
            setEndValue((prev) => prev - 1); // Keep reducing text, but stop at "Hi"
          }
    
          // Once reversal stops at "Hi", move to the next text
          if (!isForward && endValue === 3) {
            setIsForward(true);  // Start typing again
            setIndex((prev) => (prev + 1) % texts.length);  // Move to the next text
          }
        }, 100);

      return ()=>clearInterval(intervalId)
    }, [endValue,isForward,index,texts]);
  
    return <div className="transition ease duration-300">{currentText}</div>
  
}

export default TextChange