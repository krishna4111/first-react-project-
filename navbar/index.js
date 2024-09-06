import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainComponent";

function ReasonToLearnReact() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<ReasonToLearnReact />, document.getElementById("root"));
