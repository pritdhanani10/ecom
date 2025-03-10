import Sidebar from "../../Components/Sidebar";
import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { HiViewGrid } from "react-icons/hi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { FaAngleDown } from "react-icons/fa6";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useContext, useEffect, useState } from "react";
import ProductItem from "../../Components/ProductItem";

import { useNavigate, useParams } from "react-router-dom";
import { fetchDataFromApi } from "../../utils/api";
import CircularProgress from "@mui/material/CircularProgress";
import { FaFilter } from "react-icons/fa";

import { MyContext } from "../../App";

const Listing = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [productView, setProductView] = useState("four");
  const [productData, setProductData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [filterId, setFilterId] = useState("");

  const [page,setPage] = useState(10);

  const history = useNavigate();

  const openDropdown = Boolean(anchorEl);

  const context = useContext(MyContext);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    setFilterId("");

    let url = window.location.href;
    let apiEndPoint = "";

    if (url.includes("subCat")) {
      apiEndPoint = `/api/products/subCatId?subCatId=${id}&location=${localStorage.getItem(
        "location"
      )}`;
    }
    if (url.includes("category")) {
      apiEndPoint = `/api/products/catId?catId=${id}&location=${localStorage.getItem(
        "location"
      )}`;
    }

    setisLoading(true);
    fetchDataFromApi(`${apiEndPoint}`).then((res) => {
      setProductData(res);
      setisLoading(false);
    });

    context.setEnableFilterTab(true);
  }, [id]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (val) => {
    if(val!=="" && val!==undefined && val!==null){
      setPage(val)
      setAnchorEl(null);
  
      let url = window.location.href;
      let apiEndPoint = "";
  
      if (url.includes("subCat")) {
        apiEndPoint = `/api/products/subCatId?subCatId=${id}&location=${localStorage.getItem(
          "location"
        )}&page=${1}&perPage=${val}`;
      }
      if (url.includes("category")) {
        apiEndPoint = `/api/products/catId?catId=${id}&location=${localStorage.getItem(
          "location"
        )}&page=${1}&perPage=${val}`;
      }
  
      setisLoading(true);
      fetchDataFromApi(`${apiEndPoint}`).then((res) => {
        setProductData(res);
        setisLoading(false);
      });
    }
  


  };

  const handleChangePage = (event, value) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    let url = window.location.href;
    let apiEndPoint = "";

    if (url.includes("subCat")) {
      apiEndPoint = `/api/products/subCatId?subCatId=${id}&location=${localStorage.getItem(
        "location"
      )}&page=${value}&perPage=8`;
    }
    if (url.includes("category")) {
      apiEndPoint = `/api/products/catId?catId=${id}&location=${localStorage.getItem(
        "location"
      )}&page=${value}&perPage=8`;
    }

    setisLoading(true);
    fetchDataFromApi(`${apiEndPoint}`).then((res) => {
      setProductData(res);
      setisLoading(false);
    });
  };

  const filterData = (subCatId) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    history(`/products/subCat/${subCatId}`);
  };

  const filterByPrice = (price, subCatId) => {
    var window_url = window.location.href;
    var api_EndPoint = "";

    if (window_url.includes("subCat")) {
      api_EndPoint = `/api/products/fiterByPrice?minPrice=${
        price[0]
      }&maxPrice=${price[1]}&subCatId=${id}&location=${localStorage.getItem(
        "location"
      )}`;
    }
    if (window_url.includes("category")) {
      api_EndPoint = `/api/products/fiterByPrice?minPrice=${
        price[0]
      }&maxPrice=${price[1]}&catId=${id}&location=${localStorage.getItem(
        "location"
      )}`;
    }

    setisLoading(true);

    fetchDataFromApi(api_EndPoint).then((res) => {
      setProductData(res);
      setisLoading(false);
    });
  };

  const filterByRating = (rating, subCatId) => {
    setisLoading(true);
    let url = window.location.href;
    let apiEndPoint = "";

    if (url.includes("subCat")) {
      apiEndPoint = `/api/products/rating?rating=${rating}&subCatId=${id}&location=${localStorage.getItem(
        "location"
      )}`;
    }
    if (url.includes("category")) {
      apiEndPoint = `/api/products/rating?rating=${rating}&catId=${id}&location=${localStorage.getItem(
        "location"
      )}`;
    }

    fetchDataFromApi(apiEndPoint).then((res) => {
      setProductData(res);
      setisLoading(false);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  const handleChange = (event, value) => {
    setisLoading(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    fetchDataFromApi(
      `/api/products?subCatId=${id}&page=${value}&perPage=6&location=${localStorage.getItem(
        "location"
      )}`
    ).then((res) => {
      setProductData(res);
      setisLoading(false);
    });
  };

  return (
    <>
      <section className="product_Listing_Page pt-5">
        <div className="container">
          <div className="productListing d-flex">
            <Sidebar
              filterData={filterData}
              filterByPrice={filterByPrice}
              filterByRating={filterByRating}
              isOpenFilter={context?.isOpenFilters}
            />

            <div className="content_right">
              <div className="showBy mt-0 mb-3 d-flex align-items-center">
                <div className="d-flex align-items-center btnWrapper">
                  <Button
                    className={productView === "one" && "act"}
                    onClick={() => setProductView("one")}
                  >
                    <IoIosMenu />
                  </Button>

                  <Button
                    className={productView === "three" && "act"}
                    onClick={() => setProductView("three")}
                  >
                    <CgMenuGridR />
                  </Button>
                  <Button
                    className={productView === "four" && "act"}
                    onClick={() => setProductView("four")}
                  >
                    <TfiLayoutGrid4Alt />
                  </Button>
                </div>

                <div className="ml-auto showByFilter">
                  <Button onClick={handleClick}>
                    Show {page} <FaAngleDown />
                  </Button>
                  <Menu
                    className="w-100 showPerPageDropdown"
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openDropdown}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={()=>handleClose(10)}>10</MenuItem>
                    <MenuItem onClick={()=>handleClose(20)}>20</MenuItem>
                    <MenuItem onClick={()=>handleClose(30)}>30</MenuItem>
                    <MenuItem onClick={()=>handleClose(40)}>40</MenuItem>
                    <MenuItem onClick={()=>handleClose(50)}>50</MenuItem>
                    <MenuItem onClick={()=>handleClose(60)}>60</MenuItem>
                  </Menu>
                </div>
              </div>

              <div className="productListing">
                {isLoading === true ? (
                  <div className="loading d-flex align-items-center justify-content-center">
                    <CircularProgress color="inherit" />
                  </div>
                ) : (
                  <>
                    {productData?.products
                      ?.slice(0)
                      .reverse()
                      .map((item, index) => {
                        return (
                          <ProductItem
                            key={index}
                            itemView={productView}
                            item={item}
                          />
                        );
                      })}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;