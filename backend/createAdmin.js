import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from './models/user.js';
dotenv.config();

const dbURI = process.env.MONGODB_URI || 'mongodb+srv://yuvrajsinghit6676:yuvraj%40123@cluster0.epqz4hk.mongodb.net/wanderlust';

async function createAdminUser() {
    const username = 'admin';
    const password = 'Yuvraj@123'; 
    const fullName = 'Admin User';
    const email = 'yuvrajsinghit6676@gmail.com';
  
    try {
      await mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
  
      // Check if admin already exists
      const adminExists = await User.findOne({ userName: username });
  
      if (adminExists) {
        console.log('Admin user already exists');
        return;
      }
  
      // Create admin user
      const adminUser = new User({
        userName: username,
        fullName: fullName,
        email: email,
        password: password, // Password will be hashed in pre-save hook
        role: 'ADMIN'
      });
  
      await adminUser.save();
      console.log('Admin user created successfully');
    } catch (error) {
      console.error('Error creating admin user:', error);
    } finally {
      await mongoose.disconnect();
    }
  }
  
  createAdminUser();

  