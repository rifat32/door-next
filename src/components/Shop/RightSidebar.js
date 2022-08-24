

import React from 'react'
import { Col, Row } from 'react-bootstrap';

const RightSidebar = ({
  classList,
  productNew,
  errors,
  handleChange,
  checkColorNotEpmty,
  handleSelectHeight,
  handleChecked,
  handleSelectOption,
  handlePanelSelect,
  heightErr,
  widthErr,
  orientations,
  extraHoleDirections,
  getHeights,
  setCustomHeight,
  customHeight
}) => {

  
  return (
    <Col xl={3} lg={4} className={`space-mt-mobile-only--60 ${classList}`} >
    {/* sidebar */}
   {
    productNew.type=="variable"?(<Row>
      <Col sm={12} className="form-group"  >
     <label htmlFor="selectedHeight" className="form-label">
       Height
     </label>
     <select
     onClick={checkColorNotEpmty}
       className={
         errors
           ? errors.selectedHeight
             ? `form-control is-invalid`
             : `form-control is-valid`
           : "form-control"
       }
       id="selectedHeight"
       name="selectedHeight"
       onChange={handleSelectHeight}
       
       value={productNew.selectedHeight}
       disabled={productNew.is_custom_size}
       >
         
       <option

         value=""
         >
         Please Select
       </option>
       {productNew.is_custom_size?(null):( productNew.variation.map((el, index) => { 
       if(!productNew.selectedProductColor) {
         return <></>;
         return		(<option
           key={index}
           value={el.id}
           style={{ textTransform: "uppercase" }}>
           {el.name}
         </option>)
       } else  {
       return getHeights(el,index)
        
         
       }

   
}))
       }
     
     </select>
     {errors?.selectedHeight && (
       <div className="invalid-feedback">{errors.selectedHeight[0]}</div>
     )}
     {errors && <div className="valid-feedback">Looks good!</div>}
 
            </Col>
            {/* width */}
            <Col sm={12} className="form-group" >
            
            <label htmlFor="selectedWidth" className="form-label">
              Width
            </label>
            <select
              className={
                errors
                  ? errors.selectedWidth
                    ? `form-control is-invalid`
                    : `form-control is-valid`
                  : "form-control"
              }
              id="selectedWidth"
              name="selectedWidth"
              onChange={handleSelectHeight}
              value={productNew.selectedWidth}
              disabled={productNew.is_custom_size}
              >
              <option
      
                value=""
                >
                Please Select
              </option>
              {
                productNew.is_custom_size?(null):(productNew.variation.map((el, index) => {
                 
                  if(el.id == productNew.selectedHeight) {
                 
                return    el.variation_value_template.map((el2,index )=> {
                      
                      return (<option
                        key={index}
                        value={el2.id}
                        style={{ textTransform: "uppercase" }}>
                        {el2.name}
                      </option>)
                    })
                   
                  } else {
                    return <></>
                  }
               
               }))
              }
              
            </select>
            {errors?.selectedWidth && (
              <div className="invalid-feedback">{errors.selectedWidth[0]}</div>
            )}
            {errors && <div className="valid-feedback">Looks good!</div>}
        
                   </Col>
                   
                   <Col sm={12} className="form-group" >
     <div className="form-check">
       <input
         className={
           errors
             ? errors.is_custom_size
               ? `form-check-input is-invalid`
               : `form-check-input is-valid`
             : "form-check-input"
         }
         type="checkbox"
         id="is_custom_size"
         name="is_custom_size"
         onChange={handleChecked}
         checked={productNew.is_custom_size}
       />

       {errors?.is_custom_size && (
         <div className="invalid-feedback">
           {errors.is_custom_size[0]}
         </div>
       )}
       {errors && <div className="valid-feedback">Looks good!</div>}
       <label className="form-check-label" htmlFor="is_custom_size">
         Do You Need Custom Size?
       </label>
     </div>
   </Col>
   {
     productNew.is_custom_size?(<>
        <Col sm={12} className="form-group" >
     <label htmlFor="custom_height" className="form-label">
     Height
     </label>
<div className="input-group">
<div className="input-group-prepend" >
<div className="input-group-text" style={{backgroundColor: '#58595B',color:"white"}} >MM</div>
</div>
     <input
     onClick={checkColorNotEpmty}
       type="text"
       className={
         errors
           ? errors.custom_height
             ? `form-control is-invalid`
             : `form-control is-valid`
           : "form-control"
       }
       style={heightErr?{
        border:"0.2rem solid red"
       }:{}}
       id="custom_height"
       name="custom_height"
       onChange={handleChange}
       value={customHeight}
     />
</div>
    
    
     {errors?.custom_height && (
       <div className="invalid-feedback">{errors.custom_height[0]}</div>
     )}
     {errors && <div className="valid-feedback">Looks good!</div>}
   </Col>
   <Col sm={12} className="form-group">
   
     <label htmlFor="custom_width" className="form-label">
     Width
     </label>
     <div className="input-group">
<div className="input-group-prepend" >
<div className="input-group-text" style={{backgroundColor: '#58595B',color:"white"}} >MM</div>
</div>
     <input
       type="text"
       className={
         errors
           ? errors.custom_width
             ? `form-control is-invalid`
             : `form-control is-valid`
           : "form-control"
       }
       style={widthErr?{
        border:"0.2rem solid red",
        ':focus': {
          outline:"none"
        },
       }:{}}
       id="custom_width"
       name="custom_width"
       onChange={handleChange}
       value={productNew.custom_width}
     />
  </div>

     {errors?.custom_width && (
       <div className="invalid-feedback">{errors.custom_width[0]}</div>
     )}
     {errors && <div className="valid-feedback">Looks good!</div>}
   </Col>
     </>):(null)
   }


                   <Col sm={12} className="form-group" >
     <div className="form-check">
       <input
         className={
           errors
             ? errors.is_hinge_holes
               ? `form-check-input is-invalid`
               : `form-check-input is-valid`
             : "form-check-input"
         }
         type="checkbox"
         id="is_hinge_holes"
         name="is_hinge_holes"
         onChange={handleChecked}
         checked={productNew.is_hinge_holes}
       />

       {errors?.is_hinge_holes && (
         <div className="invalid-feedback">
           {errors.is_hinge_holes[0]}
         </div>
       )}
       {errors && <div className="valid-feedback">Looks good!</div>}
       <label className="form-check-label" htmlFor="is_hinge_holes">
         Do You Need Hingle Holes?
       </label>
     </div>
   </Col>
{productNew.is_hinge_holes?(<>
<Col sm={12} className="form-group" >  
            <select
              className={
                errors
                  ? errors.orientation_id
                    ? `form-control is-invalid`
                    : `form-control is-valid`
                  : "form-control"
              }
              id="orientation_id"
              name="orientation_id"
              onChange={handleSelectHeight}
              value={productNew.orientation_id}>
              <option
      
                value=""
                >
                 Select Orientation
              </option>
              {orientations.map((el, index) => {
                 
                 return ( <option
      key={index}
      value={el.id}
                   >
                    {el.name}
                 </option>)
              
              })}
            </select>
            {errors?.orientation_id && (
              <div className="invalid-feedback">{errors.orientation_id[0]}</div>
            )}
            {errors && <div className="valid-feedback">Looks good!</div>}
        
                   </Col>
                   
                   <Col sm={6} className="form-group">
     <label htmlFor="hinge_holes_from_top" className="form-label">
     From Top
     </label> 
<div className="input-group">
<div className="input-group-prepend" >
<div className="input-group-text" style={{backgroundColor: '#58595B',color:"white"}} >MM</div>
</div>         
     <input
       type="text"
       className={
         errors
           ? errors.hinge_holes_from_top
             ? `form-control is-invalid`
             : `form-control is-valid`
           : "form-control"
       }
       id="hinge_holes_from_top"
       name="hinge_holes_from_top"
       onChange={handleChange}
       value={productNew.hinge_holes_from_top}
     />
     </div>

     {errors?.hinge_holes_from_top && (
       <div className="invalid-feedback">{errors.hinge_holes_from_top[0]}</div>
     )}
     {errors && <div className="valid-feedback">Looks good!</div>}
   </Col>
   <Col sm={6} className="form-group">
     <label htmlFor="hinge_holes_from_bottom" className="form-label">
     From Bottom
     </label>
     <div className="input-group">
<div className="input-group-prepend" >
<div className="input-group-text" style={{backgroundColor: '#58595B',color:"white"}} >MM</div>
</div>   
     <input
       type="text"
       className={
         errors
           ? errors.hinge_holes_from_bottom
             ? `form-control is-invalid`
             : `form-control is-valid`
           : "form-control"
       }
       id="hinge_holes_from_bottom"
       name="hinge_holes_from_bottom"
       onChange={handleChange}
       value={productNew.hinge_holes_from_bottom}
     />
</div>
     {errors?.hinge_holes_from_bottom && (
       <div className="invalid-feedback">{errors.hinge_holes_from_bottom[0]}</div>
     )}
     {errors && <div className="valid-feedback">Looks good!</div>}
   </Col> 
                   
   
   <Col sm={12} className="form-group" >
     <div className="form-check">
       <input
         className={
           errors
             ? errors.is_extra_holes
               ? `form-check-input is-invalid`
               : `form-check-input is-valid`
             : "form-check-input"
         }
         type="checkbox"
         id="is_extra_holes"
         name="is_extra_holes"
         onChange={handleChecked}
         checked={productNew.is_extra_holes}
       />

       {errors?.is_extra_holes && (
         <div className="invalid-feedback">
           {errors.is_extra_holes[0]}
         </div>
       )}
       {errors && <div className="valid-feedback">Looks good!</div>}
       <label className="form-check-label" htmlFor="is_extra_holes">
         Do You Need Extra Holes?
       </label>
     </div>
   </Col>   

{
productNew.is_extra_holes?( <> <Col sm={12} className="form-group" >
            
            
<select
 className={
   errors
     ? errors.extra_holes_direction_id
       ? `form-control is-invalid`
       : `form-control is-valid`
     : "form-control"
 }
 id="extra_holes_direction_id"
 name="extra_holes_direction_id"
 onChange={handleSelectHeight}
 value={productNew.extra_holes_direction_id}>
 <option

   value=""
   >
   Please Select 
 </option>
 {extraHoleDirections.map((el, index) => {
    
    return ( <option
key={index}
value={el.id}
      >
       {el.name}
    </option>)
 
 })}
</select>
{errors?.extra_holes_direction_id && (
 <div className="invalid-feedback">{errors.extra_holes_direction_id[0]}</div>
)}
{errors && <div className="valid-feedback">Looks good!</div>}

      </Col> 
      
      <Col sm={12} className="form-group">
      <div className="input-group">
<div className="input-group-prepend" >
<div className="input-group-text" style={{backgroundColor: '#58595B',color:"white"}} >MM</div>
</div>  
     <input
       type="text"
       className={
         errors
           ? errors.extra_holes_value
             ? `form-control is-invalid`
             : `form-control is-valid`
           : "form-control"
       }
       id="extra_holes_value"
       name="extra_holes_value"
       onChange={handleChange}
       value={productNew.extra_holes_value}

       placeholder={
       productNew.extra_holes_direction_id?extraHoleDirections.find(el => {
         console.log(el.id,productNew.extra_holes_direction_id)
         return el.id == productNew.extra_holes_direction_id
       })
       ?.name
       :""
     }
     />
     </div>

     {errors?.extra_holes_value && (
       <div className="invalid-feedback">{errors.extra_holes_value[0]}</div>
     )}
     {errors && <div className="valid-feedback">Looks good!</div>}
   </Col> 
      
      
      </> ):(null)

}
       
                   
                   </>):(null)}


                   




          </Row>):(null)
   }

   {
 productNew.type=="panel"?(<Row>

<Col sm={12} className="form-group">
    <label>Thickness</label>
     <select
className={
errors
? errors.selected_panel_index
 ? `form-control is-invalid`
 : `form-control is-valid`
: "form-control"
}
id="selected_panel_index"
name={`selected_panel_index`}
onChange={handlePanelSelect}
value={productNew.selected_panel_index}
>
<option

value=""
>
Please Select 
</option>
{JSON.parse(productNew.panels).map((el, index) => {

return ( <option
key={index}
value={index}
>
 {el.thickness} 
</option>)

})}
</select>
  </Col>
  {
productNew.selected_panel_index?(<>

<Col sm={12} className="form-group">
    <label>Length</label>
     <input
className={
errors
? errors.selected_panel_length
 ? `form-control is-invalid`
 : `form-control is-valid`
: "form-control"
}
id="selected_panel_length"
name={`selected_panel_length`}
onChange={handlePanelSelect}
value={productNew.selected_panel_length}
min={JSON.parse(productNew.panels)[productNew.selected_panel_index].len_minimum}
max={JSON.parse(productNew.panels)[productNew.selected_panel_index].len_maximum}
placeholder={`min:${JSON.parse(productNew.panels)[productNew.selected_panel_index].len_minimum} max:${JSON.parse(productNew.panels)[productNew.selected_panel_index].len_maximum}`}
/>


  </Col>

  <Col sm={12} className="form-group">
    <label>Depth</label>
     <input
className={
errors
? errors.selected_panel_depth
 ? `form-control is-invalid`
 : `form-control is-valid`
: "form-control"
}
id="selected_panel_depth"
name={`selected_panel_depth`}
onChange={handlePanelSelect}
value={productNew.selected_panel_depth}
min={JSON.parse(productNew.panels)[productNew.selected_panel_index].depth_minimum}
max={JSON.parse(productNew.panels)[productNew.selected_panel_index].depth_maximum}
placeholder={`min:${JSON.parse(productNew.panels)[productNew.selected_panel_index].depth_minimum} max:${JSON.parse(productNew.panels)[productNew.selected_panel_index].depth_maximum}`}
/>


  </Col>
</>):(null)
  }
  


  
 </Row>):(null)
   }

   <Row>
    {
      JSON.parse(productNew.options).map((el,index) => {
        
        if(productNew.selectedProductColor || !el.color_id){
          
          if(el.color?.code == (productNew.selectedProductColor) ||!el.color_id) {
          
            return  (<Col sm={12} className="form-group">
            <label>{el.option.name}</label>
             <select
   className={
     errors
       ? errors.options
         ? `form-control is-invalid`
         : `form-control is-valid`
       : "form-control"
   }
   id="options"
   name={`options-${index}`}
  onChange={handleSelectOption}
    value={productNew.options[index].selectedValue}
   >
   <option

     value=""
     >
     Please Select 
   </option>
   {el.option.option_value_template.map((el, index) => {
      
      return ( <option
key={index}
value={el.id}
        >
         {el.name}
      </option>)
   
   })}
 </select>
          </Col>)
          }else {
            return <>
          
            </>
          }
        }
        else {
          return <></>
        }
       
       
      })
    }
   
   </Row>
   <Row>
{
(productNew.length_lower_limit && productNew.length_upper_limit)?(
<Col sm={12} className="form-group">
<label htmlFor="selected_length" className="form-label">
Length
</label>
<input
type="number"
min={productNew.length_lower_limit}
max={productNew.length_upper_limit}
placeholder={`Min: ${productNew.length_lower_limit} Max: ${productNew.length_upper_limit}`}
className={
errors
? errors.selected_length
  ? `form-control is-invalid`
  : `form-control is-valid`
: "form-control"
}
id="selected_length"
name="selected_length"
onChange={handleChange}
value={productNew.selected_length}

/>



{errors?.selected_length && (
<div className="invalid-feedback">{errors.selected_length[0]}</div>
)}
{errors && <div className="valid-feedback">Looks good!</div>}
</Col>
):(null)
}
 
   </Row>
    
  </Col>
  )
}

export default RightSidebar


