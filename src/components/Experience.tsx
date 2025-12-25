
const Experience = () => {
    const data = [
        { data: '96%', heading: 'Client Satisfaction', preheading: 'Our members love their results and experience' },
        { data: '+5', heading: 'Years of Experience', preheading: 'Trust in our proven track record of transforming' },
        { data: '+800', heading: 'Active Members', preheading: 'Join our thriving fitness community' },
        { data: '24/7', heading: 'Support Available', preheading: 'Expert assistance whenever you need it' }
    ]
    return (
        <section className="p-6 py-9 flex items-center justify-center gap-6 flex-col poppins">

            <div className="h-1.5 rounded-3xl w-50  sm:w-70 bg-linear-to-r from-[#D20C13] to-[#CC4E17]" />

            {data.map((item, key) => (
                <div key={key} className="flex flex-col w-full items-center justify-center gap-6">
                    <div className="flex items-center justify-center flex-col">
                        <p className="text-[#D90A14] text-[1.58rem] sm:text-[2.2rem] poppins-semibold">{item.data} <span className="text-white  text-[18px] sm:text-[22px] poppins-medium">{item.heading}</span> </p>
                        <p className="text-[#888888] text-[0.8rem] sm:text-[0.95rem]">{item.preheading}</p>
                    </div>

                    <div className="h-1.5 rounded-3xl w-50 sm:w-70 bg-linear-to-r from-[#D20C13] to-[#CC4E17]" />

                </div>
            ))}

        </section>
    )
}

export default Experience