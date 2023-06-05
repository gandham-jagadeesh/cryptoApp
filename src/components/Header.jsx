import { Button, HStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"


const Header = ()=>{

 return <HStack backgroundColor={"blackAlpha.900"} padding={"10px"} shadow={"base"}>
    <Button variant={"unstyled"} color={"white"}><Link to="/">Home</Link></Button>
    <Button variant={"unstyled"} color={"white"}><Link to="/exchanges">Exchanged</Link></Button>
    <Button variant={"unstyled"} color={"white"}><Link to="/coins">Coins</Link></Button>
 </HStack>
}

export default Header;