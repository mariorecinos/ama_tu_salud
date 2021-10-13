const express = require('express')
const sugrRouter = express.Router()
const Sugr = require('../models/bloodSugar')

// INDEX
sugrRouter.get("/", (req, res) => {
  Sugr.find({}, (error, sugr) => {
    res.render("bloodsugar/index.ejs", {
      sugr
    })
  })
})
// NEW
sugrRouter.get("/new", (req, res) => {
  res.render("bloodsugar/new.ejs")
})
// DELETE
sugrRouter.delete("/:id", (req, res) => {
  Sugr.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/bloodsugar")
  })
})
//UPDATE
sugrRouter.put("/:id", (req, res) => {
  Sugr.findByIdAndUpdate(req.params.id,
    req.body,
    {
      new: true,
    },
    (error, updateSugr) => {
      res.redirect(`/bloodsugar/${req.params.id}`)
    })
})
//CREATE
sugrRouter.post("/", (req, res) => {
  Sugr.create(req.body, (error, sugr) => {
    res.redirect("/bloodsugar")
    sugr
  })
})
//EDIT
sugrRouter.get("/:id/edit", (req, res) => {
  Sugr.findById(req.params.id, (error, sugr) => {
    res.render("bloodsugar/edit.ejs", {
      sugr
    })
  })
})
//SHOW
sugrRouter.get("/:id", (req, res) => {
  Sugr.findById(req.params.id, (error, sugr) => {
    res.render("bloodsugar/show.ejs", {
      sugr
    })
  })
})

module.exports = sugrRouter
