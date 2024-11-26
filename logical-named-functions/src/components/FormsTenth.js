import React, { useRef } from 'react'

function FormsTenth() {
    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let englishInputRef = useRef();
    let teluguInputRef = useRef();
    let hindiInputRef = useRef();
    let mathsInputRef = useRef();
    let scienceInputRef = useRef();
    let socialInputRef = useRef();

    let firstNameResultRef = useRef();
    let lastNameResultRef = useRef();
    let englishResultRef = useRef();
    let teluguResultRef = useRef();
    let hindiResultRef = useRef();
    let mathsResultRef = useRef();
    let scienceResultRef = useRef();
    let socialResultRef = useRef();

    let resultLabelref = useRef();

    let CalculateResult=()=>{
        let firstName=firstNameInputRef.current.value;
                let lastName=lastNameInputRef.current.value;
                let englishMarks=Number(englishInputRef.current.value);
                let teluguMarks=Number(teluguInputRef.current.value);
                let hindiMarks=Number(hindiInputRef.current.value);
                let mathsMarks=Number(mathsInputRef.current.value);
                let scienceMarks=Number(scienceInputRef.current.value);
                let socialMarks=Number(socialInputRef.current.value);
                let result

                if(englishMarks <35 || teluguMarks<35 || hindiMarks<35 || mathsMarks<35 || scienceMarks<35 || socialMarks<35){
                    result="Failed"
                }
                else{
                    result="Passed"
                }

                let totalMarks=englishMarks+teluguMarks+hindiMarks+mathsMarks+scienceMarks+socialMarks;
                resultLabelref.current.innerHTML=`${firstName} ${lastName} ${result} in tenth got total marks are ${totalMarks}`

        console.log("Calculate the result");
    };
    

  return (
    <div>
      <h1>Logical Operator and Named Functions</h1>
      <hr></hr>
      <h2>Operator Precedence</h2>
      <button className="buttonOperator" type="button" onClick={()=>{
        let a=(6*8)+(8-2)/4;
        console.log(a);
      }}>Precedence</button>
      <hr></hr>
      <form>
            <fieldset>
                <legend>Please enter your Marks and Calculate</legend>
            </fieldset>
        <div>
            <label>First Name</label>
            <input type="text" ref={firstNameInputRef}
            onFocus={()=>{
                firstNameInputRef.current.style.backgroundColor="gray";
            }}
            onBlur={()=>{
                firstNameInputRef.current.style.backgroundColor="white";
            }}></input>
            <label ref={firstNameResultRef}></label>
        </div>
        <div>
            <label>Last Name</label>
            <input type="text" ref={lastNameInputRef}
            onFocus={()=>{
                lastNameInputRef.current.style.backgroundColor="gray";
            }}
            onBlur={()=>{
                lastNameInputRef.current.style.backgroundColor="white";
            }}></input>
            <label ref={lastNameResultRef}></label>
        </div>
        <div>
            <label>English Marks</label>
            <input type="number" ref={englishInputRef} 
            onFocus={()=>{
                englishInputRef.current.style.backgroundColor="orange";
            }}
            onChange={()=>{
                if(englishInputRef.current.value >=0 && englishInputRef.current.value<=100){
                    if(englishInputRef.current.value >=35){
                        englishResultRef.current.innerHTML="Pass";
                        englishResultRef.current.style.backgroundColor="green";
                    }
                    else{
                        englishResultRef.current.innerHTML="Fail";
                        englishResultRef.current.style.backgroundColor="red"
                    }
                }
                else{
                    englishResultRef.current.innerHTML="Invalid";
                    englishResultRef.current.style.backgroundColor="yellow";
                }
            }}
            onBlur={()=>{
                englishInputRef.current.style.backgroundColor="white";
            }}></input>
            <label ref={englishResultRef}></label>
        </div>
        <div>
            <label>Telugu Marks</label>
            <input type="number" ref={teluguInputRef}
            onFocus={()=>{
                teluguInputRef.current.style.backgroundColor="blue";
            }}
            onChange={()=>{
                if(teluguInputRef.current.value >=0 && teluguInputRef.current.value <=100){
                    if(teluguInputRef.current.value >=35){
                        teluguResultRef.current.innerHTML="Pass";
                        teluguResultRef.current.style.backgroundColor="green";
                    }
                    else{
                        teluguResultRef.current.innerHTML="Fail";
                        teluguResultRef.current.style.backgroundColor="red"
                    }
                }
                else{
                    teluguResultRef.current.innerHTML="Invalid";
                    teluguResultRef.current.style.backgroundColor="yellow";
                }
            }}
            onBlur={()=>{
                teluguInputRef.current.style.backgroundColor="white";
            }}></input>
            <label ref={teluguResultRef}></label>
        </div>
        <div>
            <label>Hindi Marks</label>
            <input type="number" ref={hindiInputRef}
            onFocus={()=>{
                hindiInputRef.current.style.backgroundColor="red";
            }}
            onChange={()=>{
                if(hindiInputRef.current.value >=0 && hindiInputRef.current.value <=100){
                    if(hindiInputRef.current.value >=35){
                        hindiResultRef.current.innerHTML="Pass";
                        hindiResultRef.current.style.backgroundColor="green";
                    }
                    else{
                        hindiResultRef.current.innerHTML="Fail";
                        hindiResultRef.current.style.backgroundColor="red"
                    }
                }
                else{
                    hindiResultRef.current.innerHTML="Invalid";
                    hindiResultRef.current.style.backgroundColor="yellow";
                }
            }}
            onBlur={()=>{
                hindiInputRef.current.style.backgroundColor="white";
            }}></input>
            <label ref={hindiResultRef}></label>
        </div>
        <div>
            <label>Maths Marks</label>
            <input type="number" ref={mathsInputRef}
            onFocus={()=>{
                mathsInputRef.current.style.backgroundColor="lightblue";
            }}
            onChange={()=>{
                if(mathsInputRef.current.value >=0 && mathsInputRef.current.value<=100){
                    if(mathsInputRef.current.value >=35){
                        mathsResultRef.current.innerHTML="Pass";
                        mathsResultRef.current.style.backgroundColor="green";
                    }
                    else{
                        mathsResultRef.current.innerHTML="Fail";
                        mathsResultRef.current.style.backgroundColor="red"
                    }
                }
                else{
                    mathsResultRef.current.innerHTML="Invalid";
                    mathsResultRef.current.style.backgroundColor="yellow";
                }
            }}
            onBlur={()=>{
                mathsInputRef.current.style.backgroundColor="white";
            }}></input>
            <label ref={mathsResultRef}></label>
        </div>
        <div>
            <label>Science Marks</label>
            <input type="number" ref={scienceInputRef}
            onFocus={()=>{
                scienceInputRef.current.style.backgroundColor="violet";
            }}
            onChange={()=>{
                if(scienceInputRef.current.value >=0 && scienceInputRef.current.value<=100){
                    if(scienceInputRef.current.value >=35){
                        scienceResultRef.current.innerHTML="Pass";
                        scienceResultRef.current.style.backgroundColor="green";
                    }
                    else{
                        scienceResultRef.current.innerHTML="Fail";
                        scienceResultRef.current.style.backgroundColor="red"
                    }
                }
                else{
                    scienceResultRef.current.innerHTML="Invalid";
                    scienceResultRef.current.style.backgroundColor="yellow";
                }
            }}
            onBlur={()=>{
                scienceInputRef.current.style.backgroundColor="white";
            }}></input>
            <label ref={scienceResultRef}></label>
        </div>
        <div>
            <label>Social Marks</label>
            <input type="number" ref={socialInputRef}
            onFocus={()=>{
                socialInputRef.current.style.backgroundColor="lightgreen";
            }}
            onChange={()=>{
                if(socialInputRef.current.value >=0 && socialInputRef.current.value<=100){
                    if(socialInputRef.current.value >=35){
                        socialResultRef.current.innerHTML="Pass";
                        socialResultRef.current.style.backgroundColor="green";
                    }
                    else{
                        socialResultRef.current.innerHTML="Fail";
                        socialResultRef.current.style.backgroundColor="red"
                    }
                }
                else{
                    socialResultRef.current.innerHTML="Invalid";
                    socialResultRef.current.style.backgroundColor="yellow";
                }
            }}
            onBlur={()=>{
                socialInputRef.current.style.backgroundColor="white";
            }}></input>
            <label ref={socialResultRef}></label>
        </div>
        <div>
            <label style={{width: "700px"}} ref={resultLabelref}>Please enter your Marks and Calculate</label>
        </div>
        <div>
            <button type="button" onClick={()=>{
                let firstName=firstNameInputRef.current.value;
                let lastName=lastNameInputRef.current.value;
                let englishMarks=Number(englishInputRef.current.value);
                let teluguMarks=Number(teluguInputRef.current.value);
                let hindiMarks=Number(hindiInputRef.current.value);
                let mathsMarks=Number(mathsInputRef.current.value);
                let scienceMarks=Number(scienceInputRef.current.value);
                let socialMarks=Number(socialInputRef.current.value);
                let result

                if(englishMarks <35 || teluguMarks<35 || hindiMarks<35 || mathsMarks<35 || scienceMarks<35 || socialMarks<35){
                    result="Failed"
                }
                else{
                    result="Passed"
                }

                // if(englishMarks >35 && teluguMarks>35 && hindiMarks>35 && mathsMarks>35 && scienceMarks>35 && socialMarks>35){
                //     result="Passed"
                // }
                // else{
                //     result="Failed"
                // }

                let totalMarks=englishMarks+teluguMarks+hindiMarks+mathsMarks+scienceMarks+socialMarks;
                resultLabelref.current.innerHTML=`${firstName} ${lastName} ${result} in tenth got total marks are ${totalMarks}`

                alert(`Total Marks are ${totalMarks}`);
                CalculateResult();
            }}>Calculate</button>
        </div>
      </form>
    </div>
  )
}

export default FormsTenth
