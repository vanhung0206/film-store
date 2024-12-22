import { App as AppAntdWrapper, ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import Loading from "./components/Loading";
import appRouter from "./router/appRouter";
import "./App.css";
import "./styles/font.css";

function App() {
  return (
    <AppAntdWrapper >
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "Archivo"
          }
        }}
      >
        <RouterProvider
          router={appRouter}
          fallbackElement={<Loading fullscreen />}
        />
      </ConfigProvider>
    </AppAntdWrapper>
  );
}

export default App;
