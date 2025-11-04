import { title } from "process";
import industry1 from "../../../public/Rectangle 1.png"
import industry2 from "../../../public/Rectangle 2.png"
import industry3 from "../../../public/Rectangle 3.png"
import industry4 from "../../../public/Rectangle 4.png"
const industries = [
    {
        id: 1,
        src:industry1,
        title :"Manufacturing & Production",
        description:"From machine operators to supervisors, we provide manpower that keeps assembly lines running efficiently and safely.",
        link:"/"
    },    {
        id: 2,
        src:industry2,
        title :"Construction & Infrastructure",
        description:"Skilled and unskilled workers, engineers, and site managers to support projects that shape skylines and connect communities.",
        link:"/"
    },    {
        id: 3,
        src:industry3,
        title :"Retail & FMCG",
        description:"Sales executives, floor staff, and logistics workers to keep shelves stocked and customers satisfied.",
        link:"/"
    },    {
        id: 4,
        src:industry4,
        title :"Logistics & Transportation",
        description:"Drivers, loaders, and supply-chain coordinators ensuring smooth and timely deliveries.",
        link:"/"
    },
]
export default industries;