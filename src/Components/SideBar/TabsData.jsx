import {
  HomeRounded,
  FaceRounded,
  TextSnippetRounded,
  TerminalRounded,

  ConnectWithoutContactRounded,
} from "@mui/icons-material";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const TabsData = [
  {
    lable: "خانه",
    Icon: <HomeRounded />,
    IconPosition: "start",
    ...a11yProps(0),
  },
  {
    lable: "درباره من",
    Icon: <FaceRounded />,
    IconPosition: "start",
    ...a11yProps(1),
  },
  {
    lable: "رزومه من",
    Icon: <TextSnippetRounded />,
    IconPosition: "start",
    ...a11yProps(2),
  },
  {
    lable: "نمونه کارها",
    Icon: <TerminalRounded />,
    IconPosition: "start",
    ...a11yProps(3),
  },

  {
    lable: "ارتباط با من",
    Icon: <ConnectWithoutContactRounded />,
    IconPosition: "start",
    ...a11yProps(4),
  },
];

export default TabsData;
