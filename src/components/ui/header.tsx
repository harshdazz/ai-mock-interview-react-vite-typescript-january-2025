import { cn } from "@/lib/utils"
import { useAuth } from "@clerk/clerk-react"
import { Container } from "lucide-react"
import { LogoContainer } from "./logo-container"
import { NavigationRoutes } from "./navigation-routes"
import { NavLink } from "react-router-dom"
import ProfileContainer from "./profile-container"
import ToggleContainer from "../toggle-container"


const Header = () => {
  const {userId} = useAuth()
  return (
    <div>Header</div>
  )
}

export default Header