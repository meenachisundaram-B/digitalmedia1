"use client"

import { useState } from 'react'
import Image from 'next/image'

export default function CareerPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    job: '',
    message: '',
  })
  const [status, setStatus] = useState('')
  const [selectedJob, setSelectedJob] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await res.json()

      if (result.success) {
        setStatus('✅ Message sent successfully!')
        setFormData({
          name: '',
          email: '',
          phone: '',
          city: '',
          job: '',
          message: '',
        })
      } else {
        setStatus('❌ Submission failed.')
      }
    } catch (error) {
      console.error(error)
      setStatus('❌ An error occurred.')
    }
  }

  const jobOpenings = [
    {
      title: 'Video Creative Director',
      experience: '5+ years',
      gender: 'M/F',
      description:
        'Guide the team in creating outstanding corporate videos from conceptualization to post-production.',
      responsibilities: [
        'Provide creative direction and concept building.',
        'Experience in all aspects of video production.',
      ],
      image: '/career/CA1.png',
      applyLink: 'https://forms.gle/example1',
      color: 'bg-yellow-100 hover:bg-yellow-200 text-yellow-800',
      detailColor: 'text-yellow-800',
    },
    {
      title: 'Director of Photography',
      experience: '4 - 6 years',
      gender: 'M/F',
      description:
        'Work alongside the Creative Director to determine narrative elements through visual style.',
      responsibilities: [
        'Develop a video’s visual style.',
        'Determine lighting requirements on set.',
      ],
      image: '/career/CA2.png',
      applyLink: 'https://forms.gle/example2',
      color: 'bg-indigo-100 hover:bg-indigo-200 text-indigo-800',
      detailColor: 'text-indigo-800',
    },
    {
      title: 'Video Editor',
      experience: '3+ years',
      gender: 'M/F',
      description:
        'Assemble raw footage and turn it into the final product, adding sound effects and graphics.',
      responsibilities: [
        'Edit footage based on script or outline.',
        'Improve and correct lighting and coloring.',
      ],
      image: '/career/CA3.png',
      applyLink: 'https://forms.gle/example3',
      color: 'bg-pink-100 hover:bg-pink-200 text-pink-800',
      detailColor: 'text-pink-800',
    },
    {
      title: 'Digital Marketing Executive',
      experience: '2 - 4 years',
      gender: 'M/F',
      description:
        'Develop strong and innovative digital marketing strategies to drive traffic and generate interest.',
      responsibilities: [
        'Plan and execute digital marketing campaigns.',
        'Measure and report performance of campaigns.',
      ],
      image: '/career/CA4.png',
      applyLink: 'https://forms.gle/example4',
      color: 'bg-green-100 hover:bg-green-200 text-green-800',
      detailColor: 'text-green-800',
    },
    {
      title: 'Business Development Manager',
      experience: '5+ years',
      gender: 'M/F',
      description:
        'Research and develop marketing opportunities and plan and implement new sales plans.',
      responsibilities: [
        'Handle the entire sales cycle independently.',
        'Generate new sales leads and secure business.',
      ],
      image: '/career/CA5.png',
      applyLink: 'https://forms.gle/example5',
      color: 'bg-red-100 hover:bg-red-200 text-red-800',
      detailColor: 'text-red-800',
    },
  ]

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <h1 className="text-4xl font-bold text-center text-black mb-10">Career Opportunities</h1>




      <div className="grid md:grid-cols-2 gap-10 max-w-7xl  mx-auto">
        {/* LEFT: Job List */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Current Openings</h2>
          <div className="grid grid-cols-1 gap-4">
            {jobOpenings.map((job, idx) => {
              const isSelected = selectedJob?.title === job.title
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedJob(job)}
                  className={`text-left p-4 rounded border transition-all duration-200 shadow-md ${
                    isSelected ? job.color : 'bg-white text-gray-800'
                  } ${!isSelected ? job.color : ''}`}
                >
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <p className="text-sm">
                    {job.experience} | Gender: {job.gender}
                  </p>
                </button>
              )
            })}
          </div>
        </div>

        {/* RIGHT: Job Detail with Image */}
        <div
          className={`p-6 flex flex-col gap-4 transition-colors duration-300 ${
            selectedJob ? selectedJob.detailColor : 'bg-white text-gray-800'
          }`}
        >
          {selectedJob ? (
            <>
                <div>
                <h2 className="text-xl font-bold mb-2">{selectedJob.title}</h2>
                <p className="text-sm mb-2">
                  <strong>Experience:</strong> {selectedJob.experience} |{' '}
                  <strong>Gender:</strong> {selectedJob.gender}
                </p>
                <p className="mb-4">{selectedJob.description}</p>
                <ul className="list-disc list-inside mb-4">
                  {selectedJob.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
                
                <div className="w-full h-160 relative">
                <Image
                  src={selectedJob.image}
                  alt={selectedJob.title}
                  fill
                  className="object-cover rounded"
                />
              </div>
                
                <a
                  href={selectedJob.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-800"
                >
                  Apply Now
                </a>
              </div>

               
            </>
          ) : (
            <p className="text-gray-500">Click on a job to view its details.</p>
          )}
        </div>
      </div>

      {/* FORM */}
      <div className="max-w-3xl mx-auto mt-16 bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold text-center mb-6">Get Connected</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {['name', 'email', 'phone', 'city'].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block font-medium capitalize">
                {field} *
              </label>
              <input
                id={field}
                type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded"
              />
            </div>
          ))}
          <div>
            <label htmlFor="job" className="block font-medium">
              Job Role (Optional)
            </label>
            <select
              id="job"
              name="job"
              value={formData.job}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="">Select a job role</option>
              {jobOpenings.map((job, idx) => (
                <option key={idx} value={job.title}>
                  {job.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block font-medium">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
              rows={4}
            ></textarea>
          </div>
          <div className="flex items-center">
            <input type="checkbox" required className="mr-2" id="robot-check" />
            <label htmlFor="robot-check" className="text-sm">
              I’m not a robot
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-teal-700 text-white rounded hover:bg-teal-800"
          >
            Submit
          </button>
          {status && <p className="text-center text-teal-600 mt-4">{status}</p>}
        </form>
      </div>
    </div>
  )
}