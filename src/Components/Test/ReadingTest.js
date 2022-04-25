import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import Button2 from "../Button2";
import Plate6 from "../../assets/test/Plate6.gif";
import Plate7 from "../../assets/test/Plate7.gif";
import Plate8 from "../../assets/test/Plate8.gif";
import { useSelector } from "react-redux";
import TextBox from "./TextBox";

const q7 = {
  name: "q4",
  text1: `The head, or the spherical body part that contains the brain and rests at the top of the human body,
  has quite a few individual organs and body parts on it. (It should quickly be mentioned that hair
  occupies the space on top of the head, and the ears, the organs responsible for hearing, are located
  on either side of the head.) From top to bottom, the eyebrows, or horizontal strips of hair that can be
  found above the eye, are the first components of the head.`,

  text2: `The eyes make way for the nose, or an external (sticking-out) organ that plays an important part in the
  breathing and bacteria-elimination processes. Below that is the mouth, or a wide, cavernous organ
  that chews food, removes bacteria, helps with breathing, and more. The mouth contains teeth, or
  small, white-colored, pointed body parts used to chew food, and the tongue, or a red-colored,
  boneless organ used to chew food and speak.`,
};
const q8 = {
  name: "q5",
  text1: `Noticing these things, I rode over a short causeway to the house. A servant in waiting took my horse, and I entered the Gothic archway of the hall. A valet, of stealthy step, thence conducted me, in silence, through many dark and intricate passages in my progress to the studio of his master. Much that I encountered on the way contributed, I know not how, to heighten the vague sentiments of which I have already spoken.`,
  text2: `The room in which I found myself was very large and lofty. The windows were long, narrow, and pointed, and at so vast a distance from the black oaken floor as to be altogether inaccessible from within. Feeble gleams of encrimsoned light made their way through the trellissed panes, and served to render sufficiently distinct the more prominent objects around; the eye, however, struggled in vain to reach the remoter angles of the chamber`,
};
const q9 = {
  name: "q6",
  text: `The legs are the long, muscular body parts that allow humans to move from one spot to another and
  perform a variety of actions. Each leg contains a thigh (a thick, especially muscular body part used to
  perform strenuous motions; the upper part of the leg) and a calf (thinner, more flexible body part that
  absorbs the shock associated with movement; the lower part of the leg). Feet can be found at the
  bottom of legs, and each foot is comprised of five toes, or small appendages that help balance.`,
};

const questions = [q7, q8, q9];

// configuration : darkmode, font, ...
const configuration = [];

export default function ReadingTest(props) {
  const darkMode = useSelector((state) => state.mode.value);

  const [testing1, setTesting1] = useState(true);
  const [testing2, setTesting2] = useState(true);

  useEffect(() => {
    props.setTimeInterval1(testing1 === true ? 1 : 0);
    props.setTimeInterval2(testing2 === true ? 1 : 0);
  }, [testing1, testing2]);

  const handleClickTest1 = () => {
    console.log(
      "readingtest- 9handleClickTest1 - timeInterval1",
      testing1 === false ? 1 : 0
    );
    // props.setTimeInterval1(1);
    setTesting1(!testing1);
    if (testing2 === false) {
      props.handleStepBy2(true);
      setTesting1(true);
      setTesting2(true);
    }
  };
  const handleClickTest2 = () => {
    console.log("testing2", true);

    setTesting2(!testing2);
    if (testing1 === false) {
      props.handleStepBy2(testing1);
      setTesting1(true);
      setTesting2(true);
    }
  };

  return (
    <Box sx={{ ml: "10vw", height: "100%" }}>
      <Typography
        sx={{
          color: !darkMode ? "#1f1f1f" : "#f2f2f2",
          mb: "2vh",
        }}
        variant="h4"
      >
        Read the following text and click the button.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "#a4a4a4",
        }}
      >
        <Box
          sx={{
            backgroundColor: darkMode ? "#1f1f1f" : "#f2f2f2",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            ml: "4vw",
            // mt: "10vh",
            // pb: "10vh",
            // border: "1px solid #f2f2f2",
          }}
        >
          <TextBox
            handleClick={handleClickTest1}
            text={questions[props.qNum].text1}
            darkMode={false}
          />
          <TextBox
            handleClick={handleClickTest2}
            text={questions[props.qNum].text2}
            darkMode={true}
          />
        </Box>
      </Box>
    </Box>
  );
}

export { ReadingTest as ReadingTest };
