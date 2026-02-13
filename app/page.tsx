import { Button } from "@/components/ui/button"
// import Navbar from "@/components/structures/Navbar"
import Hero from "@/components/structures/Hero"
import AvailableRooms from "@/components/structures/AvailableRooms"
import Amenities from "@/components/structures/Amenities"

import Highlight from "@/components/structures/Highlight"
import { GridIcon } from "lucide-react"
import GridImage from "@/components/structures/GridImage"
// import FacilitiesSlider from "@/components/structures/FacilitiesSlider"
import Visit from "@/components/structures/Visit"
import Footer from "@/components/structures/Footer"
import Facilities from "@/components/structures/Facilities"


export default function Home() {
  return (
    <div className="scroll-smooth">




<Hero/>
 <AvailableRooms/>

 <Facilities/>
<Amenities/>
<Highlight/>
<GridImage/>
<Visit/>


<Footer/>

    </div>
  )
}