const Container = (props) => {
  return (
    <div className='container px-12 mx-auto max-w-7xl xl:px-6'>
        {props.children}
    </div>
  )
}

export default Container