import React, { useState, useEffect, lazy, Suspense } from 'react';
import HeroSection from './components/HeroSection';
import ServiceCards from './components/ServiceCards';
import PricingTable from './components/PricingTable';
import UserSearch from './components/UserSearch';
import Footer from './components/Footer';
import { fetchUsers } from './api';

const ContactForm = lazy(() => import('./components/ContactForm'));

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        const data = await fetchUsers();
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch users');
        setLoading(false);
        console.error('Error fetching users:', err);
      }
    };

    loadUsers();
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredUsers(users);
      return;
    }
    
    const lowercaseQuery = query.toLowerCase();
    const filtered = users.filter(user => 
      user.name.toLowerCase().includes(lowercaseQuery)
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="app">
      <HeroSection />
      <ServiceCards />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Users</h2>
        <UserSearch onSearch={handleSearch} />
        
        {loading ? (
          <div className="text-center py-8">Loading users...</div>
        ) : error ? (
          <div className="text-center text-red-500 py-8">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredUsers.map(user => (
              <div key={user.id} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold">{user.name}</h3>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-gray-600">{user.phone}</p>
                <p className="text-gray-600 mt-2">{user.company.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <PricingTable />
      <Suspense fallback={<div className="text-center py-8">Loading contact form...</div>}>
        <ContactForm />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;