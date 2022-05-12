import React, { useState, useEffect } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Paginator from "react-hooks-paginator";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { Sidebar, ShopHeader, ShopProducts } from "../../components/Shop";
import { getSortedProducts } from "../../lib/product";
import { apiClient } from "../../utils/apiClient";
import { BACKENDAPI } from "../../../config";
import Loader from "react-loader-spinner";

const GridLeftSidebar = ({ products }) => {
  const [layout, setLayout] = useState("grid");
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [shopTopFilterStatus, setShopTopFilterStatus] = useState(false);
  const [productLoading, setProductLoading] = useState(true);
  

  const [currentLink, setCurrentLink] = useState(`${BACKENDAPI}/v1.0/client/products/pagination/10?page=1&&category=&&aa=`);

  const pageLimit = 12;

  const getLayout = (layout) => {
    setLayout(layout);
  };

  const getSortParams = (sortType, sortValue) => {

    let params = currentLink.split("?")[1];
    if(sortType == "category"){
      console.log(params)
      let paramsArray = params.split("&&")
      paramsArray[1] = `category=${sortValue}`
      
      setCurrentLink(currentLink.split("?")[0]
      .concat("?")
      .concat(paramsArray.join("&&")))
    
    }

    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  useEffect(() => {
    let sortedProducts = getSortedProducts(products, sortType, sortValue);
    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setProductLoading(true)

    apiClient()
      .get(currentLink)
      .then((response) => {
        setCurrentData(response.data.products.data);
        setProductLoading(false)
      })
      .catch((err) => {
        console.log(err.response);
        setProductLoading(false)
      });

    //      setCurrentData(sortedProducts.slice(offset, offset + pageLimit));

    // console.log(sortedProducts.slice(offset, offset + pageLimit))
  }, 
  // [offset, products, sortType, sortValue, filterSortType, filterSortValue]
  [
    currentLink
  ]
  );

  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Shop">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Home </a>
            </Link>
          </li>
          <li className="breadcrumb-item active">Shop</li>
        </ol>
      </BreadcrumbOne>
      <div className="shop-content space-pt--r100 space-pb--r100">
        <Container>
          <Row>
            <Col lg={9}>
              {/* shop page header */}
              <ShopHeader
                getLayout={getLayout}
                getFilterSortParams={getFilterSortParams}
                shopTopFilterStatus={shopTopFilterStatus}
                setShopTopFilterStatus={setShopTopFilterStatus}
                layout={layout}
              />
              {/* shop products */}

              {productLoading ? (
					<div className="col-12">
						<div className="text-center">
							<Loader
								type="Puff"
								color="#00BFFF"
								height={100}
								width={100}
							/>
						</div>
					</div>
				):(
          <ShopProducts layout={layout} products={currentData} /> 
        )
        }
             


              {/* shop product pagination */}
              <div className="pagination pagination-style pagination-style--two justify-content-center">
                <Paginator
                  totalRecords={sortedProducts.length}
                  pageLimit={pageLimit}
                  pageNeighbours={2}
                  setOffset={setOffset}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  pageContainerClass="mb-0 mt-0"
                  pagePrevText="«"
                  pageNextText="»"
                />
              </div>
            </Col>
            <Col lg={3} className="order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
              {/* sidebar */}

              <Sidebar products={products} getSortParams={getSortParams} />
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.productData,
  };
};

export default connect(mapStateToProps)(GridLeftSidebar);
