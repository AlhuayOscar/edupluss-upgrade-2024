import { Routes, Route } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

import Activity from "./pages/Activity";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
//import SelectEmpresa from "./components/SelectEmpresa";
import AddStep from "./components/admin/AddStep";
import AddActivity from "./components/admin/AddActivity";
import ActivitySteps from "./components/admin/ActivitySteps";
import Login from "./components/Login";
import Landing from "./pages/LandingPage";
import Admin from "./components/admin/Admin";
import AdminActivities from "./components/admin/AdminActivities";
import AddArea from "./components/admin/AddArea";
import Crud from "./components/admin/Crud";

import './index.css'
import '../public/tailwind-light/theme.css'


import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import './styles/layout/layout.scss';
import { useAppDispatch } from "./hooks/typedSelectors";
import { setLogUser } from "./redux/features/userSlice";
import { setEmpresa } from "./redux/features/activitiesSlice";


function App() {
	const dispatch = useAppDispatch()
	const navigate = useNavigate();
	const {pathname} = useLocation();

	const session = window.localStorage.getItem("token");

	const headers = {
		Authorization: `Bearer ${session}`,
	};

	useEffect(() => {
		if(pathname !== '/' && !session){
			navigate('/login')
		}
		if(pathname === '/login' && session){
			navigate('/home')
		}
	},[pathname])

	useEffect(() => {
		if (session) {
			axios
				.get(`http://localhost:3001/auth/token`, { headers })
				.then((response) => {
					if(response){
						dispatch(setLogUser(response.data.data.user))
            			dispatch(setEmpresa(response.data.findCompany))
					}
				})
				.catch((error) => {
					//? mejorar este error
					console.log(error);
				});
		}
	}, [dispatch, session]);

  return (
    <>
    <NavBar/>
    <Routes>
				{/* <Route path="/empresa/seleccionar" element={<SelectEmpresa />} /> */}
				<Route path="/" element={<Landing />} />
				<Route path="/home" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/activity/:id" element={<Activity />} />
        		<Route path="/admin" element={<Admin />} />
        		<Route path="/activities" element={<AdminActivities />} />
				<Route path="/actvitySteps/:id" element={<ActivitySteps />} />
				<Route path="/addActivity/:id" element={<AddActivity />} />
				<Route path="/addArea" element={<AddArea />} />
				<Route path="/addStep/:id" element={<AddStep />} />
				<Route path="/crud" element={<Crud />} />
		</Routes>
    </>
  );
}

export default App;
