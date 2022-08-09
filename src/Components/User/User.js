import React from "react";
import { Routes, Route } from "react-router-dom";

import UserHeader from "./UserHeader";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import NotFound from "../Helper/NotFound";
import { UserContext } from "../../UserContext";
import Head from "../Helper/Head";

const User = () => {
 const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <Head
        title="Minha Conta"
        description="Minha conta e minhas atividades."
      />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
