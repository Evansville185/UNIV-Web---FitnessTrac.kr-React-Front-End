import "./App.css";
import React, { useState } from "react";
import { Activities, Home, Loading, Login, Myroutines, Register, Routines } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [online, setOnline] = useState(false);
	const token = localStorage.getItem("tokenString");
	const [isLoading, setIsLoading] = useState(false);

	return (
		<div className="App">
			<BrowserRouter>
				<Home
					setIsLoading={setIsLoading}
					online={online}
					setOnline={setOnline}
					username={username}
					setUsername={setUsername}
					token={token}
				/>
				<aside className="showcase">
					{isLoading ? (
						<Loading online={online} />
					) : (
						<Routes>
							<Route
								path="/login"
								element={
									<Login
										username={username}
										setUsername={setUsername}
										password={password}
										setPassword={setPassword}
										setIsLoading={setIsLoading}
										setOnline={setOnline}
										token={token}
									/>
								}
							/>
							<Route
								path="/register"
								element={
									<Register
										username={username}
										setUsername={setUsername}
										password={password}
										setPassword={setPassword}
										setIsLoading={setIsLoading}
										setOnline={setOnline}
										token={token}
									/>
								}
							/>
							{!online ? null : (
							<Route path="/myroutines" element={<Myroutines online={online} token={token} username={username} />} />
							)}
							<Route path="/routines" element={<Routines online={online} token={token} />} />
							<Route path="/activities" element={<Activities online={online} token={token} />} />
						</Routes>
					)}
				</aside>
			</BrowserRouter>
			<ToastContainer />
		</div>
	);
};
export default App;
