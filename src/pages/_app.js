import "../styles/global.scss";
import { createContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
// import Data from "../../public/api/common.json";
const GetInTouch = dynamic(() => import('../app/component/GetInTouch/index'))
import { Wrapper } from '../../src/app/wrapper'
import client from "../../tina/__generated__/client";
import { useTina } from "tinacms/dist/react";
import Nav from "../app/component/Nav";
import Layout from "../app/component/Layout";

const CommonData = createContext();

export default function App({ Component, pageProps, props }) {
 
  const [playGetInTouch, setplayGetInTouch] = useState(false);
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
    response: props.response,
    categoryList:props.categoryList
  });
  const post = data?.getIntouch;
  const categoryList = props.categoryList
  const allCategory = categoryList?.categoryConnection?.edges?.map((i) => i.node)

  useEffect(() => {
    let timeout = setTimeout(() => {
      setplayGetInTouch(true);
      document.body.classList.add("bg-overflow");
    }, 5000);
    return () => {
      document.body.classList.remove("bg-overflow");
      clearTimeout(timeout);
    };
  }, []);

  const clickHandler = (show) => {
    setplayGetInTouch(show);
    if (show) {
      document.body.classList.add("bg-overflow");
    } else {
      document.body.classList.remove("bg-overflow");
    }
  };

  return (
    <>
      <CommonData.Provider value={post}>
        <Wrapper>
          {playGetInTouch ? <GetInTouch func={clickHandler} data={post}/> : null}
          <Component {...pageProps} />
        </Wrapper>
      </CommonData.Provider>
    </>
  );
}
App.getInitialProps = async (ctx) => {
  
  let variables = { relativePath: `getInTouch.md` };
  let data = {}
  let query = {}
  let categoryList={};
  try {
    const res = await client?.queries?.getIntouch(variables);
    const category = await client?.queries?.categoryConnection(variables);

    query = res.query;
    data = res.data;
    variables = res.variables;
    categoryList= category.data
 
  } catch {
    // swallow errors related to document creation
  }
  return {
    props: {
      variables: variables,
      data: data,
      query: query,
      categoryList: categoryList,
      //myOtherProp: 'some-other-data',
    },
  };
};
export { CommonData };
