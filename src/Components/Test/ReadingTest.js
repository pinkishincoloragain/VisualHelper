import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Button2 from "../Button2";
import Plate6 from "../../assets/test/Plate6.gif";
import Plate7 from "../../assets/test/Plate7.gif";
import Plate8 from "../../assets/test/Plate8.gif";
import { useSelector } from "react-redux";

const q4 = {
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
const q5 = {
  name: "q5",
};
const q6 = {
  name: "q6",
  text: `The legs are the long, muscular body parts that allow humans to move from one spot to another and
  perform a variety of actions. Each leg contains a thigh (a thick, especially muscular body part used to
  perform strenuous motions; the upper part of the leg) and a calf (thinner, more flexible body part that
  absorbs the shock associated with movement; the lower part of the leg). Feet can be found at the
  bottom of legs, and each foot is comprised of five toes, or small appendages that help balance.`,
};

const questions = [q4, q5, q6];

const ReadingTest = (props) => {
  const darkMode = useSelector((state) => state.mode.value);

  const handleClick = () => {
    props.handleStep();
  };

  return (
    <>
      <Typography
        sx={{
          color: !darkMode ? "#1f1f1f" : "#f2f2f2",
          ml: "5vh",
          mb: "2vh",
        }}
        variant="h3"
      >
        Read the following text and click the button.
      </Typography>
      <Box
        sx={{
          px: "5vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#a4a4a4",
        }}
      >
        <Box
          sx={{
            backgroundColor: darkMode ? "#1f1f1f" : "#f2f2f2",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: "1rem",
              width: "50%",
              height: "50%",
              backgroundColor: "#f2f2f2",
            }}
          >
            <Typography sx={{ px: "4vw" }} variant="h6" color="#1f1f1f">
              {questions[props.qNum].text1}
            </Typography>
          </Box>
          <Box
            sx={{
              p: "1rem",
              width: "50%",
              height: "50%",
              backgroundColor: "#1f1f1f",
            }}
          >
            <Typography
              sx={{ px: "4vw", color: "#f2f2f2" }}
              variant="h6"
              color="#1f1f1f"
            >
              {questions[props.qNum].text2}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Button2
        sx={{
          ml: "5vh",
        }}
        name="Finish"
        onClick={handleClick}
      ></Button2>
    </>
  );
};

export { ReadingTest as ReadingTest };
