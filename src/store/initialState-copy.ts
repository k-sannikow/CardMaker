import {
  ActionHistory,
  ArtObj,
  Img,
  Text,
  Background,
  Filter,
  Canvas,
  CardMaker,
  ViewModel,
  BlockTypes,
  Area,
  SetOfArtObject
} from "./types";

const testArtObj: ArtObj = {
  id: "d3df27cd-3053-21a6-4abe-9db51cda7c17",
  type: BlockTypes.artObj,
  width: 150,
  height: 150,
  x: 20,
  y: 280,
  src: SetOfArtObject.sun_1,
}

const testImg: Img = {
  id: "4f406201-6f2f-b9ce-575e-438b1a7d1456",
  type: BlockTypes.img,
  width: 320,
  height: 238,
  x: 100,
  y: 270,
  src: "https://images.pexels.com/photos/3337209/pexels-photo-3337209.jpeg?cs=srgb&dl=pexels-mo-3337209.jpg&fm=jpg",
}

const testText: Text = {
  id: "9a13a85a-59ee-7ba3-1c64-fcad25650fc1",
  type: BlockTypes.text,
  x: 200,
  y: 280,
  text: "<div>Это</div><div>закат!!!</div>",
  size: 40,
  bold: true,
  italic: true,
  underline: true,
  color: "#ffffff",
  fontFamily: "Sensei",
}

const testBackground: Background = {
  color: null,
  src: "https://images.pexels.com/photos/8175462/pexels-photo-8175462.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  width: 867,
  height: 650,
}

const testFilter: Filter = {
  color: "#c1e319",
  opacity: 0.05,
}

const deleteArea: Area[] = [
  {
    width: 100,
    height: 50,
    x: 150,
    y: 200,
  },
  {
    width: 70,
    height: 50,
    x: 350,
    y: 175,
  }
];


const testCanvas: Canvas = {
  width: 800,
  height: 800,
  filter: testFilter,
  listBlock: [
    testImg,
    testArtObj,
    testText
  ],
  deleteArea: deleteArea,
  background: testBackground,
}

const testActionHistory: ActionHistory = {
  listState:
    [
      testCanvas,
    ],
  currentIndex: 0,
}

const viewModel: ViewModel = {
  bgColor: null,
  bgImg: null,
  canvasSize: null,
  filter: null,
  text: {
    color: null,
    size: null,
    bold: null,
    italic: null,
    underline: null,
    fontFamily: null,
    tempColor: null,
    tempSize: null,
  },
  areaSelection: null,
}

export const testCardMaker: CardMaker = {
  canvas: testCanvas,
  selectBlock: null,
  history: testActionHistory,
  viewModel: viewModel,
}