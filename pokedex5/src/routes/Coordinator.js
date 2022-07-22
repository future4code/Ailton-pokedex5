export const goToHomePage = (navigate) => {
  navigate("/");
};

export const goToHomePageId = (navigate, id) => {
  navigate(`/page/${id}`);
};

export const goToDetailsPage = (navigate, id) => {
  navigate(`/details/${id}`);
};

export const goToPokedex = (navigate) => {
  navigate("/pokedex");
};

export const goToBattlePage = (navigate) => {
  navigate("/battle");
};

export const goErrorPage = (navigate) => {
  navigate("/notFound");
};
