import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const [value, setValue] = useState("");
	const [result, setResult] = useState("");

	const encode = () => {
		setResult(encodeURIComponent(value));
	};
	const decode = () => {
		setResult(decodeURIComponent(value));
	};

  const copyToClipboard = () => {
    const textArea = document.createElement("textarea");
    textArea.value = result;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    toast.success("Copy was successful", {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
  }
	return (
		<div className="body">
			<div className="container">
				<div className="heading">
					<h1>URL Encoder-Decoder</h1>
				</div>
				<div className="user">
					<div className="inputArea">
						<textarea
							className="textArea"
							cols="70"
							rows="9"
							value={value}
							onChange={(e) => setValue(e.target.value)}
						></textarea>
					</div>
					<div className="buttonArea">
						<button className="button" onClick={encode}>
							<span>Encode</span>
						</button>
						<button className="button button2" onClick={decode}>
							<span>Decode</span>
						</button>
					</div>
				</div>
			</div>
			<div className="result">
      <ToastContainer />
				<h1>Result String</h1>
				<h2 className="output" onClick ={copyToClipboard}>{result}</h2>
			</div>
		</div>
	);
}

export default App;
