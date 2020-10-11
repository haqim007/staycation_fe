const NumberFormat = (number) => {
    const fn = new Intl.NumberFormat("id-ID")
    return fn.format(number)
}

export default NumberFormat;