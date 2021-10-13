const express = require('express')
const medsRouter = express.Router()
const Med = require('../models/medication.js')

// INDEX
medsRouter.get("/", (req, res) => {
  Med.find({}, (error, med) => {
    res.render("medications/index.ejs", {
      med
    })
  })
})
// NEW
medsRouter.get("/new", (req, res) => {
  res.render("medications/new.ejs")
})
// DELETE
medsRouter.delete("/:id", (req, res) => {
  Med.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/medications")
  })
})
//UPDATE
medsRouter.put("/:id", (req, res) => {
  Med.findByIdAndUpdate(req.params.id,
    req.body,
    {
      new: true,
    },
    (error, updateMed) => {
      res.redirect(`/medications/${req.params.id}`)
    })
})
//CREATE
medsRouter.post("/", (req, res) => {
  Med.create(req.body, (error, med) => {
    res.redirect("/medications")
    med
  })
})
//EDIT
medsRouter.get("/:id/edit", (req, res) => {
  Med.findById(req.params.id, (error, med) => {
    res.render("medications/edit.ejs", {
      med
    })
  })
})
//SHOW
medsRouter.get("/:id", (req, res) => {
  Med.findById(req.params.id, (error, med) => {
    res.render("medications/show.ejs", {
      med
    })
  })
})

module.exports = medsRouter
