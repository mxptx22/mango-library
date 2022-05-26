const express = require('express')
const router = express.Router()
const Section = require('../models/section')

// All Sections Route
router.get('/', async (req, res) => {
  let searching = {}
  if (req.query.name != null && req.query.name !== '') {
    searching.name = new RegExp(req.query.name, 'i') 
  }
  try {
    const allSections = await Section.find(searching)
    res.render('sections/index', {allSections : allSections, searching:req.query})
  } catch {
    res.redirect('/')
  }
  
})

// New Sections Route
router.get('/new', (req, res) => {
  res.render('sections/new', { section: new Section() })
})

// New Sections Route
router.post('/', async (req, res) => {

  const section = new Section({
    name: req.body.name,
    floor: req.body.floor,
    buildingUnit: req.body.buildingUnit
  })

  try {
    const newSection = await section.save()
      res.redirect(`sections`)
  } catch {
      res.render('sections/new', {
        section:section,
        errorMessage:'Error // Make sure all fields are filled'
      }) 
  }

})

module.exports = router