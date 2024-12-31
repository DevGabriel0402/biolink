import "./loading.css";

export const Loading = () => {
  const hideLoading = () => {
    const loadingElement = document.getElementById("loading");
    if (loadingElement) {
      setTimeout(() => {
        loadingElement.style.display = "none";
        loadingElement.style.opacity = "0";
        loadingElement.style.transition = "all .3s";
      }, 1200);
    }
  };

  window.addEventListener("load", hideLoading);

  return (
    <div id="loading">
      <div className="spin"></div>
    </div>
  );
};
