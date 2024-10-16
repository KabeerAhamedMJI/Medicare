import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/rootLayout";
import HomePage from "../pages/patient/homePage";
import PatientLoginPage from "../pages/patient/patientLoginPage";
import PatientSignupPage from "../pages/patient/PatientSignupPage";
import AppointmentPage from "../pages/patient/appointmentPage";
import PatientProfilePage from "../pages/patient/patientProfilePage";
import ErrorPage from "../pages/patient/errorPage";
import PatientLayout from "../layouts/patientLayout";
import Servicepage from "../pages/patient/servicepage";
import PatientProtect from "./protectedRoutes/patientProtect";
import BookAppointment from "../components/patient/bookAppointment";
import AdminLayout from "../layouts/adminLayout";
import AdminProtect from "./protectedRoutes/adminProtect";
import AdminLogin from "../pages/admin/adminLogin";
import Admindashbord from "../pages/admin/dashbord";
import AdminAppointmentPage from "../pages/admin/appointmentPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/patientLoginPage',
                element: <PatientLoginPage />
            },
            {
                path: '/patientSignupPage',
                element: <PatientSignupPage />
            },
            ,
            {
                path: 'servicePage',
                element: <Servicepage />
            },
            {
                path: 'login/admin',
                element: <AdminLogin />
            }
        ]
    },
    {
        path: '/patient',
        element: (
            <PatientProtect>
                <PatientLayout />
            </PatientProtect>
        ),
        children: [
            {
                path: '',
                element: <HomePage />
            },
            {
                path: 'patientProfilePage',
                element: <PatientProfilePage />
            },
            {
                path: 'appointmentPage',
                element: <AppointmentPage />
            },
            {
                path: 'bookappointment',
                element: <BookAppointment />
            },
            {
                path: 'servicePage',
                element: <Servicepage />
            }
        ]
    },
    {

        path: "admin",
        element: (
            <AdminProtect>
                <AdminLayout />
            </AdminProtect>
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <Admindashbord />
            },
            {
                path: 'appointmentPage',
                element: <AdminAppointmentPage />
            }
        ]
    }
]);
