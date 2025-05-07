import React  from "react";

function Card(props){
   
    
    return(
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black mb-6">
        <img
          src="https://images.unsplash.com/photo-1493612276216-ee3925520721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {props.userName}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{props.title}</h2>
        </div>
        <p className="text-gray-300">
          {props.des}
        </p>
      </div>
    )
}

export default Card;