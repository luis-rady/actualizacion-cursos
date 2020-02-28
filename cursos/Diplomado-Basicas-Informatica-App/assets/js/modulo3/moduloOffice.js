$(document).ready(() => {

  $('#office-2007').on('click', () => {
    $('#office-2007').addClass('selected')
    $('#office-2010').removeClass('selected')

    $('#office-2007-section').removeClass('hidden')
    $('#office-2010-section').addClass('hidden')
  })
  
  $('#office-2010').on('click', () => {
    $('#office-2010').addClass('selected')
    $('#office-2007').removeClass('selected')

    $('#office-2010-section').removeClass('hidden')
    $('#office-2007-section').addClass('hidden')
  })

  $('#office2007-1').on('click', () => {
    $('#office2007-1').addClass('selected')
    $('#office2010-1').removeClass('selected')

    $('#office2007-1-section').removeClass('hidden')
    $('#office2010-1-section').addClass('hidden')
  })
  
  $('#office2010-1').on('click', () => {
    $('#office2010-1').addClass('selected')
    $('#office2007-1').removeClass('selected')

    $('#office2010-1-section').removeClass('hidden')
    $('#office2007-1-section').addClass('hidden')
  })

  $('#office2007-2').on('click', () => {
    $('#office2007-2').addClass('selected')
    $('#office2010-2').removeClass('selected')

    $('#office2007-2-section').removeClass('hidden')
    $('#office2010-2-section').addClass('hidden')
  })
  
  $('#office2010-2').on('click', () => {
    $('#office2010-2').addClass('selected')
    $('#office2007-2').removeClass('selected')

    $('#office2010-2-section').removeClass('hidden')
    $('#office2007-2-section').addClass('hidden')
  })

  $('#office2007-3').on('click', () => {
    $('#office2007-3').addClass('selected')
    $('#office2010-3').removeClass('selected')

    $('#office2007-3-section').removeClass('hidden')
    $('#office2010-3-section').addClass('hidden')
  })
  
  $('#office2010-3').on('click', () => {
    $('#office2010-3').addClass('selected')
    $('#office2007-3').removeClass('selected')

    $('#office2010-3-section').removeClass('hidden')
    $('#office2007-3-section').addClass('hidden')
  })

  $('#office2007-4').on('click', () => {
    $('#office2007-4').addClass('selected')
    $('#office2010-4').removeClass('selected')

    $('#office2007-4-section').removeClass('hidden')
    $('#office2010-4-section').addClass('hidden')
  })
  
  $('#office2010-4').on('click', () => {
    $('#office2010-4').addClass('selected')
    $('#office2007-4').removeClass('selected')

    $('#office2010-4-section').removeClass('hidden')
    $('#office2007-4-section').addClass('hidden')
  })

  $('#of2007-1').on('click', () => {
    $('#of2007-1').addClass('selected')
    $('#of2007-2').removeClass('selected')
    $('#of2007-3').removeClass('selected')
    $('#of2007-4').removeClass('selected')

    $('#of2007-1-section').removeClass('hidden')
    $('#of2007-2-section').addClass('hidden')
    $('#of2007-3-section').addClass('hidden')
    $('#of2007-4-section').addClass('hidden')
  })

  $('#of2007-2').on('click', () => {
    $('#of2007-2').addClass('selected')
    $('#of2007-1').removeClass('selected')
    $('#of2007-3').removeClass('selected')
    $('#of2007-4').removeClass('selected')

    $('#of2007-2-section').removeClass('hidden')
    $('#of2007-1-section').addClass('hidden')
    $('#of2007-3-section').addClass('hidden')
    $('#of2007-4-section').addClass('hidden')
  })

  $('#of2007-3').on('click', () => {
    $('#of2007-3').addClass('selected')
    $('#of2007-1').removeClass('selected')
    $('#of2007-2').removeClass('selected')
    $('#of2007-4').removeClass('selected')

    $('#of2007-3-section').removeClass('hidden')
    $('#of2007-1-section').addClass('hidden')
    $('#of2007-2-section').addClass('hidden')
    $('#of2007-4-section').addClass('hidden')
  })

  $('#of2007-4').on('click', () => {
    $('#of2007-4').addClass('selected')
    $('#of2007-1').removeClass('selected')
    $('#of2007-2').removeClass('selected')
    $('#of2007-3').removeClass('selected')

    $('#of2007-4-section').removeClass('hidden')
    $('#of2007-1-section').addClass('hidden')
    $('#of2007-2-section').addClass('hidden')
    $('#of2007-3-section').addClass('hidden')
  })

  $('#of2010-1').on('click', () => {
    $('#of2010-1').addClass('selected')
    $('#of2010-2').removeClass('selected')
    $('#of2010-3').removeClass('selected')
    $('#of2010-4').removeClass('selected')

    $('#of2010-1-section').removeClass('hidden')
    $('#of2010-2-section').addClass('hidden')
    $('#of2010-3-section').addClass('hidden')
    $('#of2010-4-section').addClass('hidden')
  })

  $('#of2010-2').on('click', () => {
    $('#of2010-2').addClass('selected')
    $('#of2010-1').removeClass('selected')
    $('#of2010-3').removeClass('selected')
    $('#of2010-4').removeClass('selected')

    $('#of2010-2-section').removeClass('hidden')
    $('#of2010-1-section').addClass('hidden')
    $('#of2010-3-section').addClass('hidden')
    $('#of2010-4-section').addClass('hidden')
  })

  $('#of2010-3').on('click', () => {
    $('#of2010-3').addClass('selected')
    $('#of2010-1').removeClass('selected')
    $('#of2010-2').removeClass('selected')
    $('#of2010-4').removeClass('selected')

    $('#of2010-3-section').removeClass('hidden')
    $('#of2010-1-section').addClass('hidden')
    $('#of2010-2-section').addClass('hidden')
    $('#of2010-4-section').addClass('hidden')
  })

  $('#of2010-4').on('click', () => {
    $('#of2010-4').addClass('selected')
    $('#of2010-1').removeClass('selected')
    $('#of2010-2').removeClass('selected')
    $('#of2010-3').removeClass('selected')

    $('#of2010-4-section').removeClass('hidden')
    $('#of2010-1-section').addClass('hidden')
    $('#of2010-2-section').addClass('hidden')
    $('#of2010-3-section').addClass('hidden')
  })

  $('#word-escondido-1').on('click', () => {
    $('#word-escondido-1').attr("src", "../../assets/images/course/modulo3/word-show-1.gif")
  })
  
  $('#word-escondido-2').on('click', () => {
    $('#word-escondido-2').attr("src", "../../assets/images/course/modulo3/word-show-2.gif")
  })

  $('#word-escondido-3').on('click', () => {
    $('#word-escondido-3').attr("src", "../../assets/images/course/modulo3/word-show-3.gif")
  })

  $('#word-escondido-4').on('click', () => {
    $('#word-escondido-4').attr("src", "../../assets/images/course/modulo3/word-show-4.gif")
  })

  $('#elem1').on('click', () => {
    $('#elem1').addClass('selected')
    $('#elem2').removeClass('selected')
    $('#elem3').removeClass('selected')
    $('#elem4').removeClass('selected')

    $('#elem1-section').removeClass('hidden')
    $('#elem2-section').addClass('hidden')
    $('#elem3-section').addClass('hidden')
    $('#elem4-section').addClass('hidden')
  })

  $('#elem2').on('click', () => {
    $('#elem2').addClass('selected')
    $('#elem1').removeClass('selected')
    $('#elem3').removeClass('selected')
    $('#elem4').removeClass('selected')

    $('#elem2-section').removeClass('hidden')
    $('#elem1-section').addClass('hidden')
    $('#elem3-section').addClass('hidden')
    $('#elem4-section').addClass('hidden')
  })

  $('#elem3').on('click', () => {
    $('#elem3').addClass('selected')
    $('#elem1').removeClass('selected')
    $('#elem2').removeClass('selected')
    $('#elem4').removeClass('selected')

    $('#elem3-section').removeClass('hidden')
    $('#elem1-section').addClass('hidden')
    $('#elem2-section').addClass('hidden')
    $('#elem4-section').addClass('hidden')
  })

  $('#elem4').on('click', () => {
    $('#elem4').addClass('selected')
    $('#elem1').removeClass('selected')
    $('#elem2').removeClass('selected')
    $('#elem3').removeClass('selected')

    $('#elem4-section').removeClass('hidden')
    $('#elem1-section').addClass('hidden')
    $('#elem2-section').addClass('hidden')
    $('#elem3-section').addClass('hidden')
  })

})