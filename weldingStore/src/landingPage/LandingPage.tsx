import { useNavigate } from "react-router-dom";
import { HeaderBar } from "../crossPageComps/HeaderBar";

export function LandingPage() {
  const navigate = useNavigate();

  const handleStoreLinkClick = () => {
    navigate("/store")
  }

  return (
    <>
      <HeaderBar />

    </>
  )
}
