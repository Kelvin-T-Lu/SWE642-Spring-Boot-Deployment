package swe.restjpahw3.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

import java.util.Date;
import java.util.Objects;

@Entity
@Table(name="surveys")
public class Survey {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name="first_name", nullable=false)
	private String firstName;
	
	@Column(name="last_name", nullable=false)
	private String lastName;
	
	@Column(name="address", nullable=false)
	private String address;
	
	@Column(name="city", nullable=false)
	private String city;
	
	@Column(name="state", nullable=false)
	private String state;
	
	@Column(name="zip", nullable=false)
	private int zip;
	
	@Column(name="email", nullable=false)
	private String email;

    @Column(name="telephone", nullable=false)
	private String telephone;
	
	@Column(name="date", nullable=false)
	private Date date;
	
	@Column(name="likes", nullable=false)
	private String[] likes;
	
	@Column(name="interest", nullable=false)
	private String interest;
		
	@Column(name="recommend", nullable=false)
	private String recommend;

	@Column(name="comments", nullable=false)
	private String comments;

	public long getId() {
		return id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public int getZip() {
		return zip;
	}

	public void setZip(int zip) {
		this.zip = zip;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String[] getLikes() {
		return likes;
	}

	public void setLikes(String[] likes) {
		this.likes = likes;
	}

	public String getInterest() {
		return interest;
	}

	public void setInterest(String interest) {
		this.interest = interest;
	}

	public String getRecommend() {
		return recommend;
	}

	public void setRecommend(String recommend) {
		this.recommend = recommend;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	@Override
	public int hashCode() {
		return Objects.hash(city, comments, recommend, date, email, firstName, id, interest, lastName, likes, telephone,
				state, address, zip);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Survey other = (Survey) obj;
		return Objects.equals(city, other.city) && Objects.equals(recommend, other.recommend)
				&& Objects.equals(comments, other.comments)
				&& Objects.equals(date, other.date) && Objects.equals(email, other.email)
				&& Objects.equals(firstName, other.firstName) && id == other.id
				&& Objects.equals(interest, other.interest) && Objects.equals(lastName, other.lastName)
				&& Objects.equals(likes, other.likes) && Objects.equals(telephone, other.telephone)
				&& Objects.equals(state, other.state)
				&& Objects.equals(address, other.address) && zip == other.zip;
	}

	@Override
	public String toString() {
		return "Survey [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", address="
				+ address + ", city=" + city + ", state=" + state + ", zipe=" + zip
				+ ", telephone=" + telephone + ", email=" + email + ", date=" + date + ", likes=" + likes
				+ ", interest=" + interest + ", recommend=" + recommend + ", comments=" + comments +"]";
	}
	
}
