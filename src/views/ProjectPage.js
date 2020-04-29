import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { doGetProjects } from '../actions/project.js'

const Project = () => {
  const project = useSelector(state => state.project)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(doGetProjects())
  }, [])

  return (
      <div>
        {
    console.log(project)}
      </div>
  )
}

export default Project