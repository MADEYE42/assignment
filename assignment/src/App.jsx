import React from 'react';
import { Search } from 'lucide-react';
import Logo from "./Logo.png"
const CityButton = ({ city, active }) => (
  <button
    className={`px-4 py-2 rounded-full text-sm ${
      active ? 'bg-[#E8EFFF] text-[#1849C6]' : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    {city}
  </button>
);

const PropertyCard = ({ image, title, location, beds, price, rating, reviews }) => (
  <div className="rounded-lg overflow-hidden bg-white shadow-sm">
    <div className="relative">
      <img src="https://s3-alpha-sig.figma.com/img/ffb3/4f0a/a3a1c4cd27e67d1bc3cba2b9756cfea8?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nchjl1SKKGEVdNZkC4C-CppjDmehZMausbmQgn7jMgs9Y6BqMGhgeXSDTM3DO6bj4Wcqb77bQLBzzHMmTSXgDOeYTQvN3PCD54QipXBBLl5eOm6HZxCxFDstl1c~0M89plMPR3wrfvUrTsXiVhoz~Hd-1U1BtomQptj~EQPgcrfDPBaCLCrCp6r4EISn23cYPmxpzz2m5BxSYMirf4pLwsPbfyV~-yguGUiOyKmLnRvJjZ9KrDPpIbLwy4KpGMwLMlO8xrA6xZmJIFanXkoF~7C-uEbLvtUpeK-lB7EQV3jQ6jnPiaQKOvrDtCRlonCIO7eD81q8a43xQsORObh6eQ__" alt="Property" className="w-full h-64 object-cover" />
      <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white">
        ❤️
      </button>
      <div className="absolute bottom-4 right-4 flex gap-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-white/60" />
        ))}
      </div>
    </div>
    <div className="p-4">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="flex items-center gap-1">
          <span className="text-[#1849C6]">★</span>
          <span>{rating}</span>
          <span className="text-gray-500">({reviews})</span>
        </div>
      </div>
      <p className="text-gray-600 mt-1">{location}</p>
      <p className="text-gray-600 mt-1">{beds} beds</p>
      <p className="mt-2">
        <span className="text-lg font-semibold text-gray-900">₹{price}</span>
        <span className="text-gray-500">/month</span>
      </p>
    </div>
  </div>
);

const BenefitCard = ({ icon, title }) => (
  <div className="p-6 bg-white rounded-xl shadow-sm">
    <img src={Logo} alt={title} className="w-full mb-4" />
    <h3 className="text-lg font-semibold text-center text-gray-900">{title}</h3>
  </div>
);

const LocalityRow = ({ name, price, growth }) => (
  <div className="flex items-center justify-between py-4 border-b border-gray-100">
    <div className="font-medium text-gray-900">{name}</div>
    <div className="text-gray-600">₹{price}/sq.ft</div>
    <div className={`${growth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
      {growth}%
    </div>
  </div>
);

const App = () => {
  const cities = ['Goa', 'Mumbai', 'Kolkata', 'Jaipur', 'Bangalore', 'Kerala', 'Pune'];
  
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Find Your Perfect <span className="text-[#7F3DFF]">Rental Home</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Beautifully curated rental homes that perfectly match your style and needs, making your
            search for the ideal living space effortless and enjoyable.
          </p>
          
          {/* Search Bar */}
          <div className="mt-8 flex justify-center">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="Find your city"
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1849C6] bg-white"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          
          {/* City Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {cities.map((city, index) => (
              <CityButton key={city} city={city} active={index === 0} />
            ))}
          </div>
        </div>

        {/* Property Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <PropertyCard
            title="Flat In North Goa"
            location="Goan Studio Near Vagator Beach"
            beds="2"
            price="43,788"
            rating="4.94"
            reviews="31"
          />
          <PropertyCard
            title="Flat In Arambol"
            location="Studio apartment"
            beds="1"
            price="43,788"
            rating="4.94"
            reviews="31"
          />
          <PropertyCard
            title="Flat In Stay In Siolim"
            location="Jenny's home"
            beds="2"
            price="26,968"
            rating="4.94"
            reviews="31"
          />
        </div>

        {/* Benefits Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Discover The <span className="text-[#7F3DFF]">Benefits</span> Of Renting With Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Beautifully curated rental homes that perfectly match your style and needs, making your
            search for the ideal living space effortless and enjoyable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BenefitCard title="Match With Your Ideal Roommate" />
            <BenefitCard title="Seamless Communication" />
            <BenefitCard title="Discover Activities Around You" />
          </div>
        </div>

        {/* Localities Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Leading <span className="text-[#7F3DFF]">Localities</span> To Explore
          </h2>
          <p className="text-gray-600 max-w-3xl mb-8">
            Explore a selection of the most desirable neighborhoods, where vibrant communities and
            exceptional amenities come together to create your perfect living environment.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl">
              <div className="flex gap-4 mb-6 overflow-x-auto">
                {['Popular', 'Investment Hotspots', 'Affordable', 'Great Lifestyle'].map((tab, index) => (
                  <button
                    key={tab}
                    className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                      index === 0 ? 'bg-[#E8EFFF] text-[#1849C6]' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              <div className="space-y-2">
                <LocalityRow name="Mira Road" price="9.6K" growth={1.57} />
                <LocalityRow name="Andheri West" price="28.1K" growth={-4.8} />
                <LocalityRow name="Chembur" price="20.9K" growth={10.7} />
                <LocalityRow name="Borivali West" price="22.3K" growth={-1.00} />
                <LocalityRow name="Malad West" price="18.8K" growth={4.67} />
                <LocalityRow name="Kandivali West" price="20.4K" growth={8.57} />
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden h-full min-h-[400px]">
              {/* Map placeholder - you'll need to implement actual map integration */}
              <img src="https://s3-alpha-sig.figma.com/img/465a/671b/7ba07d2c8b89c3bdbd6df9d94c4ff61c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p1tcD338dgaf7nuZIKa0i3zZf8SWRNZgcPVEbJwAbvxJ68haRu8GJRLQSNoVF-4vY6lo-0mQfUo-VdL36wDCGbNtl1CEDcffNZHsLY~XtnzzU--6gpH5I45krcGwhlvJ8K520G06QBYq4xu9pq~ugMNY-NPixiw2UnNmgJIUx6klH5-dN2NH6LT36D3ONU0D0AZdiWQBEMRZgvYSFa6phSK1MNlXkUSM~Zjhy5yCQDZyLlzHgYxun6og886pqrMDr2GQQfN1zCTYn6~f6lCDNN5JgPCqyqzPnLE5FSaAKX~p3pD12W73iEwpVh4Q5jZVLdCwXwz5fHqK0TrDqISnTA__" alt="Map" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;