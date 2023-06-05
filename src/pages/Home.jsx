
import { Box,Image, Text} from "@chakra-ui/react";
import { motion } from "framer-motion";
import btc from "../assets/btc.png";
function Home(){


    return (
    <Box backgroundColor={"blackAlpha.900"} width={"full"} height={"80vh"}>
        <motion.div
        
        style={{height:"80vh"}}
        animate={{translateY:"20px"}}
        transition={{duration:2,repeat:Infinity,repeatType:"reverse"}}
        >
            <Image src={btc} objectFit={"contain"} width={"full"} height={"full"}></Image>
        </motion.div>
        <Text
        
        textAlign={"center"}
        color={
        "whiteAlpha.100"
        }
        fontWeight={"thin"}
        fontSize={"6xl"}
        marginTop={"-20px"}
        >
         xcrypto
        </Text>
    </Box>
 )
}


export default Home;