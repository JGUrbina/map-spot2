import { memo } from "react";
import { ContainerTop } from "./stylesSidebar";
import { ContainerHeader, Header } from "../global/styles";
import SelectTypeSpot from "./SelectTypeSpot";
import SelectTrm from "./SelectTrm";
import Range from "./Range";
import Search from "./Search";

const TopSidebar: React.FC = () => {
  return (
    <ContainerHeader>
      <Header>
        <ContainerTop>
          <SelectTypeSpot />
          <SelectTrm />
          <Range />
          <Search />
        </ContainerTop>
      </Header>
    </ContainerHeader>
  );
};

export default memo(TopSidebar);
