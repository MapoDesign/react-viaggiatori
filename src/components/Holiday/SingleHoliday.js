import React from "react";
import H2 from "@material-tailwind/react/Heading2";
import LeadText from "@material-tailwind/react/LeadText";
import './SingleHoliday.css'
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const SingleHoliday = ({
  titolo,
  descrizione,
  durata,
  img,
  prezzo,
  next,
  prev,
}) => {
  return (
    <>
      <img
        src={img} alt={titolo}
        className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full"
      />
      
      <div className="container max-w-8xl relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <H2 color="white">{titolo}</H2>
            <div className="text-gray-200">
              <LeadText color="gray-200">{descrizione}</LeadText>
            </div>
            
          </div>
        </div>
      </div>
      <div className="btn-group" id="btn-group">
        <button type="button" className="btn btn-reset" onClick={prev} id="button-pre">
          <GrFormPreviousLink className="icon" />{" "}
        </button>

        <button type="button" className="btn btn-reset" onClick={next} id="button-next">
          {" "}
          <GrFormNextLink className="icon" />{" "}
        </button>
      </div>
    </>
  );
};

export default SingleHoliday;
