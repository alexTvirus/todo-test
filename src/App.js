
import './App.css';
import ListCard from './components/ListCard';

function App() {

  let data1 = [{
    id: "1",
    content: " Lorem, ipsum dolor sit 1",
    des: " Lorem ipsum dolor sit, amet consect! 1",
    imgurl: "https://lh3.googleusercontent.com/d/17lo2046GidbKA_ue297APYFnV5kvLU34=w1000-rw"
  },
  {
    id: "2",
    content: " Lorem, ipsum dolor sit 2",
    des: " Lorem ipsum dolor sit, amet consect! 2",
    imgurl: "https://lh3.googleusercontent.com/d/17lo2046GidbKA_ue297APYFnV5kvLU34=w1000-rw"
  },
  {
    id: "3",
    content: " Lorem, ipsum dolor sit 3",
    des: " Lorem ipsum dolor sit, amet consect! 1",
    imgurl: "https://lh3.googleusercontent.com/d/17lo2046GidbKA_ue297APYFnV5kvLU34=w1000-rw"
  }
  ]

  let data2 = [{
    id: "1",
    content: " Lorem, ipsum dolor sit 1",
    des: " Lorem ipsum dolor sit, amet consect! 1",
    imgurl: "https://lh3.googleusercontent.com/d/1uU94lseT66N3AYNnEOCDlEZ3ME47qQiI=w1000-rw"
  },
  {
    id: "2",
    content: " Lorem, ipsum dolor sit 2",
    des: " Lorem ipsum dolor sit, amet consect! 2",
    imgurl: "https://lh3.googleusercontent.com/d/1uU94lseT66N3AYNnEOCDlEZ3ME47qQiI=w1000-rw"
  },
  {
    id: "3",
    content: " Lorem, ipsum dolor sit 3",
    des: " Lorem ipsum dolor sit, amet consect! 1",
    imgurl: "https://lh3.googleusercontent.com/d/1uU94lseT66N3AYNnEOCDlEZ3ME47qQiI=w1000-rw"
  }
  ]

  return (
    <div className="App">
      <ListCard data={data1} title="list 1"></ListCard>
      <ListCard data={data2} title="list 2"></ListCard>
    </div>
  );
}

export default App;
