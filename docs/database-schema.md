# Database schema for book.nowCRM

## Overview

This file describes a PostgreSQL schema for the bus booking MVP.

## Tables

### users
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(50) NOT NULL,
  password_hash VARCHAR(255),
  role VARCHAR(30) DEFAULT 'customer',
  reward_points INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### agencies
```sql
CREATE TABLE agencies (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  phone VARCHAR(50),
  status VARCHAR(30) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW()
);
```

### routes
```sql
CREATE TABLE routes (
  id SERIAL PRIMARY KEY,
  agency_id INTEGER REFERENCES agencies(id),
  departure_city VARCHAR(100) NOT NULL,
  destination_city VARCHAR(100) NOT NULL,
  departure_time TIME NOT NULL,
  arrival_time TIME NOT NULL,
  base_price INTEGER NOT NULL,
  available_seats INTEGER DEFAULT 30,
  seat_type VARCHAR(50) DEFAULT 'standard',
  created_at TIMESTAMP DEFAULT NOW()
);
```

### bookings
```sql
CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  route_id INTEGER REFERENCES routes(id),
  agency_id INTEGER REFERENCES agencies(id),
  seat_number INTEGER,
  amount INTEGER NOT NULL,
  payment_status VARCHAR(30) DEFAULT 'pending',
  booking_status VARCHAR(30) DEFAULT 'confirmed',
  booking_reference VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### transactions
```sql
CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  booking_id INTEGER REFERENCES bookings(id),
  provider VARCHAR(50) NOT NULL,
  amount INTEGER NOT NULL,
  status VARCHAR(30) DEFAULT 'pending',
  reference_code VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);
```

### rewards
```sql
CREATE TABLE rewards (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  booking_id INTEGER REFERENCES bookings(id),
  points_awarded INTEGER NOT NULL,
  reason VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Reward logic

- Points earned: 2% of ticket amount
- Example: 20,000 FCFA booking = 400 reward points
- Points can be used later for discounts or special promotions
