import ConfigurationPanel from "../../components/ConfigurationPanel";
import CreateNote from "../../components/CreateNote";
import NotesList from "../../components/NotesList";

import { HomeWrapper } from "./styles";

const Home = () => {
  return (
    <HomeWrapper>
      <ConfigurationPanel />
      <CreateNote />
      <NotesList />
    </HomeWrapper>
  );
};

export default Home;
