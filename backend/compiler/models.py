from django.db import models

# Create your models here.

class Property(models.Model):
    STATUS_CHOICES = [
        ('Available', 'Available'),
        ('Not Available', 'Not Available')
    ]
    name = models.CharField(max_length=120)
    property_type = models.CharField(max_length=50)
    location = models.CharField(max_length=200)
    city = models.CharField(max_length=50)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)
    facility = models.JSONField(default=dict)
    details = models.TextField()
    price = models.FloatField(default=0.0)
    image = models.ImageField()
    

class Customer(models.Model):
    pass

class Agent(models.Model):
    name = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=20)
    email = models.EmailField()
    address = models.TextField()

class Order(models.Model):
    pass

class Post(models.Model):
    pass

class Transaction(models.Model):
    pass

class Inbox(models.Model):
    pass

class Transition(models.Model):
    pass

class Income(models.Model):
    pass

class Expense(models.Model):
    pass