import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { GymList } from "./gym/GymList";
import { GymCreate } from "./gym/GymCreate";
import { GymEdit } from "./gym/GymEdit";
import { GymShow } from "./gym/GymShow";
import { GymEquipmentList } from "./gymEquipment/GymEquipmentList";
import { GymEquipmentCreate } from "./gymEquipment/GymEquipmentCreate";
import { GymEquipmentEdit } from "./gymEquipment/GymEquipmentEdit";
import { GymEquipmentShow } from "./gymEquipment/GymEquipmentShow";
import { GymServiceList } from "./gymService/GymServiceList";
import { GymServiceCreate } from "./gymService/GymServiceCreate";
import { GymServiceEdit } from "./gymService/GymServiceEdit";
import { GymServiceShow } from "./gymService/GymServiceShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"GymManagement"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Gym"
          list={GymList}
          edit={GymEdit}
          create={GymCreate}
          show={GymShow}
        />
        <Resource
          name="GymEquipment"
          list={GymEquipmentList}
          edit={GymEquipmentEdit}
          create={GymEquipmentCreate}
          show={GymEquipmentShow}
        />
        <Resource
          name="GymService"
          list={GymServiceList}
          edit={GymServiceEdit}
          create={GymServiceCreate}
          show={GymServiceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
