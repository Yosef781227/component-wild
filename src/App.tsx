import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "@layouts/Root";
//import  DynamicIconButton from "@components/Buttons/dynamicIconButton";
import DynamicAvatar from "@components/Avater/DynamicAvatar";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    
    children: [
      {
        index: true,
         element: <DynamicAvatar  name="B" bgColor="blue.600" size="sm" textColor="white" />
         
         
        

      },
    ],

  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
