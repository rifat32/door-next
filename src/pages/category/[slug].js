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
import { useRouter } from 'next/router'

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
  

 

  const pageLimit = 12;
  const router = useRouter()
  const { slug } = router.query;

  const getLayout = (layout) => {
    setLayout(layout);
  };

  const getSortParams = (sortType, sortValue) => {

    let params = currentLink.split("?")[1];
    
  
   
       // style sort
    if(sortType == "style"){
      
      let paramsArray = params.split("&&")
      let finalParamsArray = paramsArray.filter(el => {
        return el.split("=")[0] !== "style"
       
      })
      params =   finalParamsArray.join("&&")
      params = params.concat(`&&style=${sortValue}`)
      setCurrentLink(currentLink.split("?")[0]
      .concat("?")
      .concat(params))
    
    }
      // end style sort
           // color sort
    if(sortType == "color"){
      
      let paramsArray = params.split("&&")
      let finalParamsArray = paramsArray.filter(el => {
        return el.split("=")[0] !== "color"
       
      })
      params =   finalParamsArray.join("&&")
      params = params.concat(`&&color=${sortValue}`)
      setCurrentLink(currentLink.split("?")[0]
      .concat("?")
      .concat(params))
    
    }
      // end color sort

      

    setSortType(sortType);
    setSortValue(sortValue);
  };




  // const getSortParams = (sortType, sortValue) => {

  //   let params = currentLink.split("?")[1];
  //   // category sort
  //   if(sortType == "category"){
      
  //     let paramsArray = params.split("&&")
  //     let finalParamsArray = paramsArray.filter(el => {
  //       return el.split("=")[0] !== "category"
       
  //     })
      
  //     params =   finalParamsArray.join("&&")
     
  //     params = params.concat(`&&category=${sortValue}`)

  

  //     setCurrentLink(currentLink.split("?")[0]
  //     .concat("?")
  //     .concat(params))
    
  //   }
  //     // end category sort
  //      // style sort
  //   if(sortType == "style"){
      
  //     let paramsArray = params.split("&&")
  //     let finalParamsArray = paramsArray.filter(el => {
  //       return el.split("=")[0] !== "style"
       
  //     })
  //     params =   finalParamsArray.join("&&")
  //     params = params.concat(`&&style=${sortValue}`)
  //     setCurrentLink(currentLink.split("?")[0]
  //     .concat("?")
  //     .concat(params))
    
  //   }
  //     // end style sort
  //          // color sort
  //   if(sortType == "color"){
      
  //     let paramsArray = params.split("&&")
  //     let finalParamsArray = paramsArray.filter(el => {
  //       return el.split("=")[0] !== "color"
       
  //     })
  //     params =   finalParamsArray.join("&&")
  //     params = params.concat(`&&color=${sortValue}`)
  //     setCurrentLink(currentLink.split("?")[0]
  //     .concat("?")
  //     .concat(params))
    
  //   }
  //     // end color sort

      

  //   setSortType(sortType);
  //   setSortValue(sortValue);
  // };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(9)
  const [from, setFrom] = useState(null)
  const [to, setTo] = useState(null)
  const [total, setTotal] = useState(null)

  const [lastPage, setLastPage] = useState(0)

  const [links, setLinks] = useState(null)

  const [current_page, set_current_page] = useState(0)

  const [nextPageLink, setNextPageLink] = useState("");
	const [prevPageLink, setPrevPageLink] = useState("");
  const [currentLink, setCurrentLink] = useState(`${BACKENDAPI}/v1.0/client/products/pagination/${perPage}?page=1&&category_name=${slug}&&aa=bb`);
  // useEffect(() => {
	// 	loadData(perPage);
	// }, []);
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



    // apiClient().get(`${BACKENDAPI}/v1.0/client/categories/search/exact/${slug}`)
    // .then(response => {
     

   
    //   loadData(`${BACKENDAPI}/v1.0/client/products/pagination/${perPage}?page=1&&category=${response.data.data.id}&&aa=bb`)

    // })



    loadData(`${BACKENDAPI}/v1.0/client/products/pagination/${perPage}?page=1&&category_name=${slug}&&aa=bb`)

    
    

   

    // apiClient()
    //   .get(currentLink)
    //   .then((response) => {
    //     setCurrentData(response.data.products.data);
    //     setProductLoading(false)
    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //     setProductLoading(false)
    //   });

    //      setCurrentData(sortedProducts.slice(offset, offset + pageLimit));

    // console.log(sortedProducts.slice(offset, offset + pageLimit))
  }, 
  // [offset, products, sortType, sortValue, filterSortType, filterSortValue]
  [
    slug
  ]
  );

  const loadData = (urlOrPerPage) => {
		setLoading(true)  
    
    setProductLoading(true)
    setCurrentData([]);
  
		let url;
		if (typeof urlOrPerPage === "string") {
			url = urlOrPerPage.replace("http", "http");
           setCurrentLink(url)
		} else {
			url = 
      `${BACKENDAPI}/v1.0/client/products/pagination/${urlOrPerPage}`
      .concat("?")
      .concat(currentLink.split("?")[1])
		}
    
		apiClient()
			.get(url)
			.then((response) => {
				setLoading(false)
				console.log(response.data)
				setFrom(response.data.products.from)
				setTo(response.data.products.to)
				setTotal(response.data.products.total)

				setLastPage(response.data.products.last_page)

				setLinks(response.data.products.links)
				set_current_page(response.data.products.current_page)
				console.log(response.data.products);
				
			  setCurrentData(response.data.products.data);
        setProductLoading(false)

				setNextPageLink(response.data.products.next_page_url);
				setPrevPageLink(response.data.products.prev_page_url);
			})
			.catch((error) => {
				setLoading(false)
				console.log(error.response)
			});
	};

  const handlePerPage = (e) => {
      const newValue = parseInt(e.target.value);
      setPerPage(newValue)
      console.log(newValue)
      loadData(newValue)
  
    }
    const setLinksView = (el, index, arr) => {
      if(el.url){
        let params = currentLink.split("?")[1];
   
        let paramsArray = params.split("&&")
        let finalParamsArray = paramsArray.filter(el => {
          return el.split("=")[0] !== "page"
         
        })
        params =   finalParamsArray.join("&&")
        el.url += `&&${params}`
      }
  
                  
        
               

  

      if (el.label == "&laquo; Previous") {
        if (el.url) {
          return <li key={index} className="page-item"><button className="page-link" onClick={() =>
            loadData(el.url)} >Previous</button></li>
        }
        else {
          return <></>
          return <li key={index} className="page-item disabled"><button className="page-link"  >Previous</button></li>
        }
      }
      else if (el.label == "Next &raquo;") {
        if (el.url) {
          return <li key={index} className="page-item"><button onClick={() =>
            loadData(el.url)} className="page-link" >Next</button></li>
        }
        else {
          return <></>
          return <li key={index} className="page-item disabled"><button className="page-link" >Next</button></li>
        }
      } else {
        if (index === 1) {
          return <React.Fragment key={index}><li className="page-item"><button className={`page-link  ${el.active && "text-dark"}`} onClick={() =>
            index == current_page ? null : loadData(el.url)} >
            1
          </button></li>
            {
              current_page > 4 ? (<li className="page-item"><button className={`page-link `} >
                ....
              </button></li>) : null
            }
          </React.Fragment>
        }
        else if (index === lastPage && lastPage > 1) {
          return <React.Fragment key={index}>
            {
              current_page < (lastPage - 3) ? (<li className="page-item">
                <button className={`page-link `} >
                  ....
                </button></li>) : null
            }
            <li key={index} className="page-item"><button className={`page-link  ${el.active && "text-dark"}`} onClick={() =>
              index == current_page ? null : loadData(el.url)} >
              {lastPage}
            </button></li>
  
          </React.Fragment>
        }
        else {
  
          if (index == current_page + 1 || index == current_page + 2 || index == current_page - 1 || index == current_page - 2 || index == current_page) {
            return <li key={index} className="page-item"><button className={`page-link  ${el.active && "text-dark"}`} onClick={() =>
              index == current_page ? null : loadData(el.url)} >
              {el.label}
            </button></li>
  
          }
  
  
  
        }
  
      }
    }
  // if (!currentData?.length) {

  //     return <div className="noProduct d-flex align-items-center justify-content-center">
  //       {
  //         loading ? "loading..." : <h3 className="display-3" >
  //           No products to show
  //         </h3>
  //       }
  
  //     </div>
  //   }
// if(!currentData.length){
// return <div className="design">No Product Found</div>
// }
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
                products={products} getSortParams={getSortParams}


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
          currentData.length?( <ShopProducts layout={layout} products={currentData}  /> ):("No Product Found")
         
        )
        }
             
<div className="footer-pagination">
				<div className="row">
					<div className="col-md-4 text-center">
						<div className="items">
							<label>Item per page</label> <select onChange={handlePerPage} value={perPage}>
								<option value={6}>6</option>
								<option value={9}>9</option>
								<option value={12}>12</option>
								<option value={15}>15</option>

							</select>
						</div>

					</div>
					<div className="col-md-2 text-center">
						<div className="number">{from} - {to} of {total}</div>

					</div>
					<div className="col-md-6">

						<nav aria-label="Page navigation example   ">
							<ul className="pagination  ">

								{
									links ? links.map((el, index, arr) => setLinksView(el, index, arr)) : null
								}





							</ul>
						</nav>



					</div>



				</div>
			
			</div>

              {/* shop product pagination */}
              {/* <div className="pagination pagination-style pagination-style--two justify-content-center">
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
              </div> */}
            </Col>
            <Col lg={3} className="order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0 d-none d-lg-block ">
              {/* sidebar */}

              <Sidebar hideCategory={true} products={products} getSortParams={getSortParams}  />
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
