import { createContext, useState } from "react";
import runchat from "../config/gemini.js";
export const Context = createContext();
const ContextProvider = (props) => {
  const [input, setinput] = useState("");
  const [recent_prompt, setrecent_prompt] = useState([]);
  const [previous_prompt, setprevious_prompt] = useState([]);
  const [result, setresult] = useState("");
  const [loading, setloading] = useState(false);
  const [showresult, setshowresult] = useState(false);

  const delayparas = (index, nextword) => {
    setTimeout(() => {
      setresult((prev) => prev + nextword);
    }, 80 * index);
  };

  const onSent = async () => {
    setresult("");
    setloading(true);
    setshowresult(true);
    setrecent_prompt(input);
    const Response = await runchat(input);
    const responseArray = Response.split("**");
    // console.log(responseArray);
    let newArray = [];
    for (let i = 0; i < responseArray.length; i++) {
      if (i % 2 == 0) {
        newArray = newArray + responseArray[i];
      } else {
        newArray = newArray + " <b> " + responseArray[i] + "</b> ";
      }
    }
    let newArray2 = newArray.split("*").join("</br>");
    let newresponse = newArray2.split(" ");
    for (let i = 0; i < newresponse.length; i++) {
      delayparas(i, newresponse[i] + " ");
    }
    setloading(false);
    setinput("");
  };
  const ContextValue = {
    input,
    setinput,
    recent_prompt,
    setrecent_prompt,
    previous_prompt,
    setprevious_prompt,
    result,
    setresult,
    loading,
    setloading,
    showresult,
    setshowresult,
    onSent,
  };
  return (
    <Context.Provider value={ContextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
