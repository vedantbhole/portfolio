import {useState} from "react";
import {motion, AnimatePresence} from "motion/react";

const CopyEmailButton = () => {
    const [copied, setCopied] = useState(false);
    const email = "vabhole4@gmail.com"
    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        },2000)
    }

    return (
        <motion.button className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
                       onClick={copyToClipboard}
        whileHover={{y:-5}}
        whileTap={{scale:1.05}}>
            <AnimatePresence mode={"wait"}>
            {copied ?
                (<motion.p className="flex items-center justify-center gap-2"
                           key="copied"
                           initial={{opacity:0,y:-10}}
                           animate={{opacity:1,y:0}}
                           exit={{opacity:0,y:-10}}
                           transition={{duration:0.1, ease:"easeInOut"}}>
                <img src="assets/copy-done.svg" className="w-5" alt="copy-done icon"/>
                Email has been copied
                </motion.p>) :
                (
                <motion.p className="flex items-center justify-center gap-2"
                          key="copy"
                          initial={{opacity:0}}
                          animate={{opacity:1}}
                          exit={{opacity:0}}
                          transition={{duration:0.1}}>
                <img src="assets/copy.svg" className="w-5" alt="copy icon" />
                Copy email address
                </motion.p>)
            }
            </AnimatePresence>
        </motion.button>
    )
}
export default CopyEmailButton
