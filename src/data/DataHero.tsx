import { BiWorld } from "react-icons/bi"
import { FaUsers } from "react-icons/fa"
import { IoMdTime } from "react-icons/io"
import { IoCarSportOutline } from "react-icons/io5"
import { LuFlagTriangleRight } from "react-icons/lu"
import { MdOutlineDateRange } from "react-icons/md"

export const dataButton =[
    {id:1,name:'Public Tours',icon:<BiWorld />,},
    {id:2,name:'Private Tours',icon:<FaUsers /> ,}
  ]
export const dataTabs =[
    {id:1,name:'Public Tours',icon:<BiWorld />,noborder:true,dropdown:'Choose number',dataDropDown:[{id:1,name:'1'},{id:2,name:'2'},{id:3,name:'3'}]},
    {id:2,name:'Date',icon:<MdOutlineDateRange />,dropdown:'Choose Date',dataDropDown:[{id:1,name:'10'},{id:2,name:'2'},{id:3,name:'3'}]},
    {id:3,name:'Time',icon:<IoMdTime />,dropdown:'Choose Time',dataDropDown:[{id:1,name:'1'},{id:2,name:'2'},{id:3,name:'3'}]},
    {id:4,name:'Tour',icon:<LuFlagTriangleRight/> ,dropdown:'Select Tour',dataDropDown:[{id:1,name:'1'},{id:2,name:'2'},{id:3,name:'3'}]},
    {id:5,name:'Transportation',icon:<IoCarSportOutline />,dropdown:'Select Transportation',dataDropDown:[{id:1,name:'1'},{id:2,name:'2'},{id:3,name:'3'}]}
  ]
export const dataTwoTabs =[
    {id:1,name:'Public Action',icon:<BiWorld />,noborder:true,dropdown:'Choose Value',dataDropDown:[{id:1,name:'1'},{id:2,name:'2'},{id:3,name:'3'}]},
    {id:2,name:'Date Type',icon:<MdOutlineDateRange />,dropdown:'Choose DateT',dataDropDown:[{id:1,name:'10'},{id:2,name:'2'},{id:3,name:'3'}]},
    {id:3,name:'Time One',icon:<IoMdTime />,dropdown:'Choose Time',dataDropDown:[{id:1,name:'1'},{id:2,name:'2'},{id:3,name:'3'}]},
    {id:4,name:'Tour One',icon:<LuFlagTriangleRight/> ,dropdown:'Select TourO',dataDropDown:[{id:1,name:'1'},{id:2,name:'2'},{id:3,name:'3'}]},
    {id:5,name:'Transpor One',icon:<IoCarSportOutline />,dropdown:'Select Transport',dataDropDown:[{id:1,name:'1'},{id:2,name:'2'},{id:3,name:'3'}]}
  ]